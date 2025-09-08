'use client';

import * as React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItemButton
} from '@mui/material';
import ExpandMoreRounded from '@mui/icons-material/ExpandMoreRounded';

type Props = {
  title: string;
  items: string[];
  expanded: boolean;
  onChange: (expanded: boolean) => void;
  onItemClick: (value: string) => void;
};

export default function MenuAccordion({
  title,
  items,
  expanded,
  onChange,
  onItemClick
}: Props) {
  return (
    <Accordion
      elevation={0}
      disableGutters
      expanded={expanded}
      onChange={(_, v) => onChange(v)}
      sx={{
        padding: '14px 8px',
        borderBottom: '1px solid #E5E7EB',
        margin: '0px !important',
        bgcolor: 'transparent !important',

        '&:last-of-type': {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        },
        '&.css-ksq6p1-MuiPaper-root-MuiAccordion-root': {
          bgcolor: 'transparent !important'
        }
      }}
    >
      <AccordionSummary
        sx={{
          bgcolor: 'transparent !important',
          p: 0,
          margin: '0px !important'
        }}
        expandIcon={<ExpandMoreRounded />}
      >
        <Typography
          sx={{
            fontSize: {xs: 16, sm: 18},
            fontWeight: '300',
            color: '#000',
            fontFamily: '"Inter", sans-serif !important'
          }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          p: 0,
          bgcolor: 'transparent !important',
          fontSize: {xs: '14px !important', sm: '16px !important'},
          padding: '4px 4px 16px 4px',
          marginTop: '6px!important'
        }}
      >
        <List
          sx={{
            p: 0,
            gap: '6px',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {items.map((it) => (
            <ListItemButton
              key={it}
              onClick={() => onItemClick(it)}
              sx={{
                transition: 'all 0.3s ease-in-out',
                px: '0',
                color: '#000',
                fontFamily: '"Inter", sans-serif !important',
                fontWeight: '400',
                '&:hover': {
                  paddingLeft: '8px',
                  bgcolor: 'rgba(48, 88, 255, 0.1)',
                  borderRadius: '5px',
                  color: '#4611F5'
                }
              }}
            >
              {it}
            </ListItemButton>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
}
