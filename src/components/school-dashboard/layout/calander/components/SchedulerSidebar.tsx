import localFont from '@/utils/themes';
import {Box, MenuItem, Select, Typography} from '@mui/material';
import {useState} from 'react';

import CustomTextField from '@/components/school-dashboard/InputField';
import HoursComponent from './HoursComponent';
import CustomButton from '@/components/school-dashboard/CustomButton';
import MiniFramerCalendar from './MiniFramerCalendar';
import CategoryComponent from './CategoryComponent';
import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';

export default function SchedulerSidebar() {
  const [activeIndex, setActiveIndex] = useState<number | 0>(0);
  const t = useTranslations('SchoolDashboard.Calendar.Sidebar');
  const tabs = t.raw('tabs');

  const handleClickTab = (i: number) => {
    setActiveIndex(i);
  };
  return (
    <Box
      sx={{
        maxWidth: {md: '280px', lg: '300px'},
        width: '100%',
        // height: '100%',
        background: 'rgba(248,250,252,0.3)',
        padding: {xs: '8px', md: '24px 12px'},
        border: '1px solid #fff',
        boxShadow:
          'rgb(255, 255, 255) 0px 0px 0px 1px, rgba(0, 0, 0, 0.25) 0px 1px 0px 0px, rgba(0, 0, 0, 0.25) 0px 1px 1px 0px',
        backdropFilter: 'blur(15px)',
        display: {xs: 'none', md: 'flex'},
        alignItems: 'center',
        flexDirection: {xs: 'column'},
        gap: '16px',
        overflowY: 'auto',
        overflowX: 'hidden',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        '&::-webkit-scrollbar': {
          display: 'none'
        }
      }}
    >
      <Typography
        sx={{
          ...localFont.inter16,
          fontSize: {xs: '14px', md: '15px', lg: '16px'},
          fontWeight: '500',
          // colo
          fontFamily: '"Inter", sans-serif !important'
        }}
      >
        {t('title')}
      </Typography>

      {/* Tab Section */}

      <Box
        sx={{
          // bgcolor: '#000',
          width: '100%',
          display: 'flex',
          flexDirection: {xs: 'column'},
          gap: '20px',
          alignItems: 'end',
          justifyContent: 'end'
        }}
      >
        <Box
          sx={{
            width: '100%',
            // maxWidth: '828px',
            bgcolor: '#ffffff99',
            display: 'flex',
            p: '4px',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0px 0px 2px 0px #D4D4D8',
            borderRadius: '999px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Moving Highlight */}
          <Box
            sx={{
              position: 'absolute',
              top: 4,
              bottom: 4,
              left: 4,
              width: `calc((100% - 8px) / 3)`,
              borderRadius: '999px',
              background: '#4611F5',
              // boxShadow: '0px 2px 6px 0px #fe0909ff',
              transition: 'all 0.4s ease',
              transform: `translateX(${activeIndex * 100}%)`, // move on X
              zIndex: 1
            }}
          />

          {tabs.map((item: any, i: number) => (
            <Box
              key={i}
              onClick={() => handleClickTab(i)}
              sx={{
                flex: 1,
                textAlign: 'center',
                p: '4px 8px',
                cursor: 'pointer',
                zIndex: 2
              }}
            >
              <Typography
                sx={{
                  lineHeight: '1.6em',
                  fontSize: {xs: '12px', md: '13px', lg: '14px'},
                  color: activeIndex === i ? '#ffff' : '#4A5568',
                  fontWeight: activeIndex === i ? '400' : '400',
                  transition: 'all 0.3s ease-in-out',
                  fontFamily: '"Inter", sans-serif !important'
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
        <SelectAppointmentType index={activeIndex} />
      </Box>
    </Box>
  );
}
type AppointmentProp = {
  index: number;
};
function SelectAppointmentType({index}: AppointmentProp) {
  const t = useTranslations('SchoolDashboard.Calendar.Sidebar');
  const options1 = t.raw('tab1.options');
  const options2 = t.raw('tab2.options');
  const options3 = t.raw('tab3.options');
  const days = t.raw('days');

  const [formValues, setFormValues] = useState({
    capacityPerson: '',
    durationMinutes: '',
    maximumTime: '',
    minimumTime: '',
    cancelTime: ''
  });

  const handleChange = (event: any) => {
    const {name, value} = event.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px'
      }}
    >
      {index === 0 && (
        <CategoryComponent
          color="#9333ea"
          title2={t('tab1.title2')}
          title={t('tab1.title')}
          place={t('tab1.place')}
          modalPlace={t('tab1.modalPlace')}
          options={options1}
          cancel={t('cancelBtn')}
          save={t('saveBtn')}
        />
      )}
      {index === 1 && (
        <CategoryComponent
          color="#2563eb"
          title2={t('tab2.title2')}
          title={t('tab2.title')}
          place={t('tab2.place')}
          modalPlace={t('tab2.modalPlace')}
          options={options2}
          cancel={t('cancelBtn')}
          save={t('saveBtn')}
        />
      )}

      {index === 2 && (
        <CategoryComponent
          color="#0891b2"
          title2={t('tab3.title2')}
          title={t('tab3.title')}
          place={t('tab3.place')}
          modalPlace={t('tab3.modalPlace')}
          options={options3}
          cancel={t('cancelBtn')}
          save={t('saveBtn')}
        />
      )}

      {/* Capacity Persons */}
      <Box
        component={motion.div}
        initial={{y: 50, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{
          duration: 0.2,
          ease: 'easeOut',
          delay: 0.2
          // duration: 0.2
        }}
        viewport={{once: true}}
        sx={{width: '100%'}}
      >
        <Typography
          sx={{
            ...localFont.inter14,
            fontFamily: '"Inter", "Inter Placeholder", sans-serif !important',
            fontWeight: '500',
            mb: '6px'
          }}
        >
          {t('capacity')}
        </Typography>
        <CustomTextField type="number" />
      </Box>
      {/* Duration Minutes */}
      <Box
        component={motion.div}
        initial={{y: 50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{
          duration: 0.2,
          ease: 'easeOut',
          delay: 0.3
        }}
        sx={{width: '100%'}}
      >
        <Typography
          sx={{
            ...localFont.inter14,
            fontFamily: '"Inter", "Inter Placeholder", sans-serif !important',
            fontWeight: '500',
            mb: '6px'
          }}
        >
          {t('duration')}
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            padding: '10px',
            borderRadius: '12px',
            height: '38px',
            alignItems: 'center',
            background: '#ffffffbf',
            boxShadow: '0px 0px 2px 0px #D4D4D8'
          }}
        >
          <Select
            displayEmpty
            name="durationMinutes"
            value={formValues.durationMinutes}
            onChange={handleChange}
            renderValue={(selected) =>
              selected ? (
                selected
              ) : (
                <span style={{color: '#999'}}>{t('select')}</span>
              )
            }
            sx={{
              flex: 1,
              borderRadius: 0,
              '& fieldset': {border: 'none'},
              '&:hover fieldset': {border: 'none'},
              '&.Mui-focused fieldset': {border: 'none'},
              '& .MuiSelect-select': {
                padding: '0px',
                height: 'auto'
              },
              '& .MuiOutlinedInput-root': {
                borderRadius: 0
              }
            }}
          >
            <MenuItem value="15">15</MenuItem>
            <MenuItem value="30">30</MenuItem>
            <MenuItem value="45">45</MenuItem>
            <MenuItem value="60">60</MenuItem>
            <MenuItem value="90">90</MenuItem>
            <MenuItem value="120">120</MenuItem>
          </Select>
        </Box>
      </Box>
      {/* Weekly Hours */}
      <Box
        component={motion.div}
        initial={{y: 50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{
          duration: 0.2,
          ease: 'easeOut',
          delay: 0.4
        }}
      >
        <Typography
          sx={{
            ...localFont.inter14,
            fontFamily: '"Inter", "Inter Placeholder", sans-serif !important',
            fontWeight: '500'
            // mb: '10px'
          }}
        >
          {t('weekly')}
        </Typography>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
          {days.map((data: any, i: number) => (
            <HoursComponent
              key={i}
              day={data.day}
              unavailable={data.unavailable}
            />
          ))}
        </Box>
      </Box>
      {/* Date specific availability */}
      <Box sx={{width: '100%'}}>
        <Typography
          sx={{
            ...localFont.inter14,
            fontFamily: '"Inter", "Inter Placeholder", sans-serif !important',
            fontWeight: '500'
          }}
        >
          {t('date')}
        </Typography>
        <Typography
          sx={{
            ...localFont.inter14,
            fontFamily: '"Inter", "Inter Placeholder", sans-serif !important',
            fontWeight: '300',
            mb: '6px'
          }}
        >
          {t('dateDes')}
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}
        >
          <MiniFramerCalendar />
          <HoursComponent day="Thu" />
        </Box>
      </Box>
      {/* Maximum Time in Advance for Booking */}
      <Box sx={{width: '100%'}}>
        <Typography
          sx={{
            ...localFont.inter14,
            fontFamily: '"Inter", "Inter Placeholder", sans-serif !important',
            fontWeight: '500',
            mb: '6px'
          }}
        >
          {t('maximum')}
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            padding: '10px',
            borderRadius: '12px',
            height: '38px',
            alignItems: 'center',
            background: '#ffffffbf',
            boxShadow: '0px 0px 2px 0px #D4D4D8'
          }}
        >
          <Select
            displayEmpty
            name="maximumTime"
            value={formValues.maximumTime}
            onChange={handleChange}
            renderValue={(selected) =>
              selected ? (
                selected
              ) : (
                <span style={{color: '#999'}}>{t('select')}</span>
              )
            }
            sx={{
              flex: 1,
              borderRadius: 0,
              '& fieldset': {border: 'none'},
              '&:hover fieldset': {border: 'none'},
              '&.Mui-focused fieldset': {border: 'none'},
              '& .MuiSelect-select': {
                padding: '0px',
                height: 'auto'
              },
              '& .MuiOutlinedInput-root': {
                borderRadius: 0
              }
            }}
          >
            <MenuItem value="30">30</MenuItem>
            <MenuItem value="60">60</MenuItem>
            <MenuItem value="90">90</MenuItem>
          </Select>
        </Box>
      </Box>
      {/* Minimum time in advance for booking */}
      <Box sx={{width: '100%'}}>
        <Typography
          sx={{
            ...localFont.inter14,
            fontFamily: '"Inter", "Inter Placeholder", sans-serif !important',
            fontWeight: '500',
            mb: '6px'
          }}
        >
          {t('minimum')}
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            padding: '10px',
            borderRadius: '12px',
            height: '38px',
            alignItems: 'center',
            background: '#ffffffbf',
            boxShadow: '0px 0px 2px 0px #D4D4D8'
          }}
        >
          <Select
            displayEmpty
            name="minimumTime"
            value={formValues.minimumTime}
            onChange={handleChange}
            renderValue={(selected) =>
              selected ? (
                selected
              ) : (
                <span style={{color: '#999'}}>{t('select')}</span>
              )
            }
            sx={{
              flex: 1,
              borderRadius: 0,
              '& fieldset': {border: 'none'},
              '&:hover fieldset': {border: 'none'},
              '&.Mui-focused fieldset': {border: 'none'},
              '& .MuiSelect-select': {
                padding: '0px',
                height: 'auto'
              },
              '& .MuiOutlinedInput-root': {
                borderRadius: 0
              }
            }}
          >
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="12">12</MenuItem>
            <MenuItem value="24">24</MenuItem>
          </Select>
        </Box>
      </Box>
      {/* Cancellation limit (hours) */}
      <Box sx={{width: '100%'}}>
        <Typography
          sx={{
            ...localFont.inter14,
            fontFamily: '"Inter", "Inter Placeholder", sans-serif !important',
            fontWeight: '500',
            mb: '6px'
          }}
        >
          {t('cancel')}
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            padding: '10px',
            borderRadius: '12px',
            height: '38px',
            alignItems: 'center',
            background: '#ffffffbf',
            boxShadow: '0px 0px 2px 0px #D4D4D8'
          }}
        >
          <Select
            displayEmpty
            name="cancelTime"
            value={formValues.cancelTime}
            onChange={handleChange}
            renderValue={(selected) =>
              selected ? (
                selected
              ) : (
                <span style={{color: '#999'}}>{t('select')}</span>
              )
            }
            sx={{
              flex: 1,
              borderRadius: 0,
              '& fieldset': {border: 'none'},
              '&:hover fieldset': {border: 'none'},
              '&.Mui-focused fieldset': {border: 'none'},
              '& .MuiSelect-select': {
                padding: '0px',
                height: 'auto'
              },
              '& .MuiOutlinedInput-root': {
                borderRadius: 0
              }
            }}
          >
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="12">12</MenuItem>
            <MenuItem value="24">24</MenuItem>
          </Select>
        </Box>
      </Box>
      {/* Button */}
      <CustomButton
        label={t('btn')}
        sx={{fontSize: {xs: '14px', md: '15px', lg: '16px'}, fontWeight: '500'}}
      />
    </Box>
  );
}
