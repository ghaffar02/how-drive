'use client';
import React, {useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import {Box, Typography} from '@mui/material';
import {AnimatePresence, motion} from 'framer-motion';
import cross from '@/assets/svgs/dashboard-student/crossicon.svg';
import EditappointmentDropDown from '@/components/school-dashboard/layout/students/components/EditappointmentDropDown';

interface Appointment {
  id: number;
  title: string;
  startTime: string;
  endTime: string;
  hour: number;
  category: string;
  duration: number;
}

interface DayDetailViewProps {
  date: Date;
  appointments: Appointment[];
  onClose: () => void;
}

export function DayDetailView({
  date,
  appointments,
  onClose
}: DayDetailViewProps) {
  const startHour = 6;
  const endHour = 24;
  const totalRows = endHour - startHour;

  const categories = [
    {
      key: 'purple',
      label: 'Gespräch',
      borderColor: 'rgb(147, 51, 234)',
      backgroundColor: 'rgb(237, 225, 250)'
    },
    {
      key: 'blue',
      label: 'Theoriestunden',
      borderColor: 'rgb(37, 99, 235)',
      backgroundColor: 'rgb(227, 236, 255)'
    },
    {
      key: 'cyan',
      label: 'Fahrstunden',
      borderColor: 'rgb(8, 145, 178)',
      backgroundColor: 'rgb(222, 248, 250)'
    },
    {
      key: 'red',
      label: 'Prüfungen',
      borderColor: 'rgb(220, 38, 38)',
      backgroundColor: 'rgb(250, 222, 222)'
    }
  ];

  // 🔹 popup state
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLElement | null>(null);
  const [barColor, setBarColor] = useState<string>('#9333ea');
  const [selectedEvent, setSelectedEvent] = useState<Appointment | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [popupPosition, setPopupPosition] = useState<{
    top: number;
    left: number;
  }>({
    top: 0,
    left: 0
  });

  // 🔹 click outside handling (same pattern as Appointment component)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;

      // Ignore clicks on MUI portal elements (Select menu, Popover, Modal, TimePicker, etc.)
      if (
        target.closest('.MuiPopover-root') ||
        target.closest('.MuiMenu-root') ||
        target.closest('.MuiModal-root') ||
        target.closest('.MuiPopper-root') ||
        target.closest('.MuiDialog-root')
      ) {
        return;
      }

      if (
        dropdownRef.current &&
        dropdownRef.current.contains(event.target as Node)
      ) {
        return;
      }
      if (iconRef.current && iconRef.current.contains(event.target as Node)) {
        return;
      }

      setOpenDropdown(false);
    }

    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  // translateY based on start minute (with special rule)
  const getTranslateForStartTime = (start: string, end: string) => {
    const minute = start.slice(-2);
    const endMinute = end.slice(-2);

    // SPECIAL CASE:
    // If event is XX:45 → (nextHour):00 → stay inside the same row
    if (minute === '45' && endMinute === '00') {
      return 'translateY(0px)';
    } else if (minute === '30' && endMinute === '00') {
      return 'translateY(0px)';
    } else if (minute === '15' && endMinute === '00') {
      return 'translateY(0px)';
    }

    if (minute === '15') return 'translateY(14px)';
    if (minute === '30') return 'translateY(28px)';
    if (minute === '45') return 'translateY(42px)';

    return 'translateY(0px)';
  };

  // height based on duration
  const getHeightForDuration = (start: string, end: string) => {
    const [sh, sm] = start.split(':').map(Number);
    const [eh, em] = end.split(':').map(Number);

    const totalStart = sh * 60 + sm;
    const totalEnd = eh * 60 + em;

    const duration = totalEnd - totalStart;

    if (duration === 15) return '48px';
    if (duration === 30) return '48px';
    if (duration === 45) return '48px';
    if (duration === 60) return '48px';
    if (duration === 75) return '60px';
    if (duration === 90) return '71px';
    if (duration === 120) return '96px';

    return '48px';
  };

  // group events by minute for horizontal stacking
  const groupByMinute = (
    events: Appointment[]
  ): Record<string, Appointment[]> => {
    return events.reduce(
      (acc, e) => {
        const minute = e.startTime.slice(-2);
        if (!acc[minute]) acc[minute] = [];
        acc[minute].push(e);
        return acc;
      },
      {} as Record<string, Appointment[]>
    );
  };

  // 🔹 when an event box is clicked
  const handleEventClick = (
    event: React.MouseEvent<HTMLElement>,
    appt: Appointment,
    color: string
  ) => {
    iconRef.current = event.currentTarget; // used in click-outside
    setSelectedEvent(appt);
    setBarColor(color);

    const container = containerRef.current;
    const targetElement = event.currentTarget as HTMLElement;

    if (container && targetElement) {
      const containerRect = container.getBoundingClientRect();
      const targetRect = targetElement.getBoundingClientRect();

      const gap = 8;
      const popupWidth = 300;
      const popupHeight = 600;

      let top = targetRect.bottom - containerRect.top + gap;
      let left = targetRect.right - containerRect.left + gap;

      if (top + popupHeight > containerRect.height) {
        top = targetRect.top - containerRect.top - popupHeight - gap;
        if (top < 0) {
          top = containerRect.height - popupHeight - gap;
          if (top < 0) {
            top = 0;
          }
        }
      }

      if (left + popupWidth > containerRect.width) {
        left = targetRect.left - containerRect.left - popupWidth - gap;
        if (left < 0) {
          left = containerRect.width - popupWidth - gap;
          if (left < 0) {
            left = 0;
          }
        }
      }

      setPopupPosition({top, left});
    }

    setOpenDropdown(true);
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        padding: 2,
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative' // for absolute popup
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.5)',
          pb: 3.5
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: '16px',
            color: '#2d3748',
            textTransform: 'capitalize',
            fontFamily: '"Inter", sans-serif  !important'
          }}
        >
          {date.toLocaleDateString('de-DE', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
        </Typography>

        <Box
          sx={{
            padding: '6px',
            borderRadius: '50%',
            '&:hover': {backgroundColor: '#CED5F5'},
            transition: 'all 0.22s ease-in-out',
            height: '37px',
            width: '37px'
          }}
        >
          <Image
            src={cross}
            alt="close"
            onClick={onClose}
            style={{
              height: '25px',
              width: '25px',
              cursor: 'pointer',
              transform: 'rotate(45deg)'
            }}
          />
        </Box>
      </Box>

      {/* GRID */}
      <Box
        className="daydetail-container"
        sx={{
          flex: 1,
          display: 'grid',
          gridTemplateRows: `75px repeat(${totalRows}, 1fr)`,
          gridTemplateColumns: `26px repeat(4, 234px)`,
          gap: '8px',
          paddingBottom: '12px',
          maxWidth: '930px',
          overflow: 'auto',

          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(0,0,0,0.25) transparent',
          '&::-webkit-scrollbar': {
            width: '5px',
            height: '5px'
          },
          '&::-webkit-scrollbar-track': {
            background: 'rgba(255,255,255,0.1)'
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(0,0,0,0.25)',
            borderRadius: '10px'
          },
          '&::-webkit-scrollbar-button': {
            display: 'none',
            width: 0,
            height: 0
          }
        }}
      >
        <Box />

        {categories.map((cat) => (
          <Box
            key={cat.key}
            sx={{
              background: cat.borderColor,
              color: '#fff',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 600,
              height: '30px',
              fontFamily: '"Inter", sans-serif  !important',
              fontSize: {
                xs: '12px',
                md: '13px',
                lg: '14px'
              }
            }}
          >
            {cat.label}
          </Box>
        ))}

        {/* HOURS */}
        {Array.from({length: totalRows}, (_, i) => {
          const hour = startHour + i;

          return (
            <React.Fragment key={hour}>
              {/* Time label */}
              <Box
                className="fontFamilyInter"
                sx={{
                  textAlign: 'center',
                  paddingTop: '10px',
                  color: '#4B5563',
                  fontWeight: 500,
                  fontSize: {
                    xs: '12px',
                    md: '13px',
                    lg: '14px'
                  }
                }}
              >
                {hour.toString().padStart(2, '0')}
              </Box>

              {categories.map((cat) => {
                const cellEvents = appointments.filter(
                  (a) => a.hour === hour && a.category === cat.key
                );

                const grouped = groupByMinute(cellEvents);

                return (
                  <Box
                    key={cat.key}
                    sx={{
                      background: 'rgba(255,255,255,0.75)',
                      borderRadius: '8px',
                      position: 'relative',
                      height: '48px',
                      width: '234px',
                      overflow: 'visible',
                      border:
                        cellEvents.length === 0 ? '2px solid #fff' : 'none'
                    }}
                  >
                    {Object.entries(grouped).map(([minute, eventsInGroup]) => (
                      <Box
                        key={minute}
                        sx={{
                          position: 'absolute',
                          left: 0,
                          right: 0,
                          top: 0,
                          transform: getTranslateForStartTime(
                            eventsInGroup[0].startTime,
                            eventsInGroup[0].endTime
                          ),
                          display: 'flex',
                          gap: '4px',
                          zIndex: 200
                        }}
                      >
                        {eventsInGroup.map((e) => (
                          <Box
                            key={e.id}
                            onClick={(ev) => {
                              if (cat.label === 'Prüfungen') return;
                              handleEventClick(ev, e, cat.borderColor);
                            }}
                            sx={{
                              background: cat.backgroundColor,
                              border: `1px solid ${cat.borderColor}`,
                              borderLeft: `4px solid ${cat.borderColor}`,
                              borderRadius: '8px',
                              padding: '2px 8px',
                              fontFamily: '"Inter", sans-serif  !important',
                              width: '100%',
                              height: getHeightForDuration(
                                e.startTime,
                                e.endTime
                              ),
                              fontSize: {
                                xs: '12px',
                                md: '13px',
                                lg: '14px'
                              },
                              overflow: 'hidden',
                              cursor: 'pointer'
                            }}
                          >
                            <Box
                              sx={{
                                display: 'inline-flex',
                                flexWrap: 'nowrap',
                                width: '100%',
                                justifyContent: 'space-between',
                                fontWeight: '500 !important'
                              }}
                            >
                              <span
                                className="fontFamilyInter"
                                style={{fontWeight: '500 !important'}}
                              >
                                {e.title}
                              </span>
                              <span
                                className="fontFamilyInter"
                                style={{fontWeight: '500 !important'}}
                              >
                                (B17)
                              </span>
                            </Box>

                            <br />

                            <span
                              className="fontFamilyInter"
                              style={{fontWeight: 300}}
                            >
                              {e.startTime} - {e.endTime}
                            </span>
                          </Box>
                        ))}
                      </Box>
                    ))}
                  </Box>
                );
              })}
            </React.Fragment>
          );
        })}
      </Box>

      {/* 🔻 SAME POPUP YOU SHARED 🔻 */}
      <AnimatePresence>
        {openDropdown && (
          <Box
            ref={dropdownRef}
            component={motion.div}
            onClick={(e) => e.stopPropagation()}
            initial={{
              opacity: 0,
              scale: 0.5,
              y: -20,
              x: 20,
              originX: 1,
              originY: 0
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              x: 0,
              originX: 1,
              originY: 0
            }}
            exit={{
              opacity: 0,
              scale: 0.5,
              y: -20,
              x: 20,
              originX: 1,
              originY: 0
            }}
            transition={{
              duration: 0.5,
              type: 'spring',
              stiffness: 300,
              damping: 25
            }}
            sx={{
              position: 'absolute',
              zIndex: 99999999,
              top: popupPosition.top,
              left: popupPosition.left,
              mb: '8px',
              width: {xs: '300px'},
              height: '600px',
              overflow: 'auto',
              border: '1px solid rgb(255, 255, 255)',
              backgroundColor: '#f0f0fa99',
              backdropFilter: 'blur(8px)',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              '&::-webkit-scrollbar': {
                display: 'none'
              },
              boxShadow: `
                0px 0px 0px 1px rgb(255, 255, 255),
                0px 1px 0px 0px rgba(0, 0, 0, 0.25),
                0px 1px 1px 0px rgba(0, 0, 0, 0.25)
              `,
              borderRadius: '12px',
              transformOrigin: 'top right'
            }}
          >
            <EditappointmentDropDown
              title="Edit appointment"
              driverLabel="Driver"
              dayLabel="Day"
              beginLabel="Begin"
              endLabel="End"
              participantsLabel="Participants"
              participantName="Daniel Mustermann 1"
              cancelHeading="Cancel appointment"
              cancelDescription="To cancel the appointment remove all participants from the list and click Save."
              cancelBtnLabel="Cancel"
              saveBtnLabel="Save"
              dropdownOptions={[
                {value: 'malfunction', label: 'Malfunction'},
                {value: 'question', label: 'Question'}
              ]}
              barColor={barColor}
            />
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
}
