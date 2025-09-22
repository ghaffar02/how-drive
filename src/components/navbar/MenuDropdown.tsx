'use client';

import * as React from 'react';
import {Box, Typography, Paper, Popper, Grow, Link} from '@mui/material';
import KeyboardArrowDownRounded from '@mui/icons-material/KeyboardArrowDownRounded';

type Props = {
  label: string;
  items: {
    text: string;
    href: string;
  }[];
};

export default function MenuDropdown({label, items}: Props) {
  const textStyle = {
    color: '#000000',
    fontSize: {xs: '14px', md: '15px', lg: '16px'},
    fontWeight: '300',
    lineHeight: '1.6em',
    fontFamily: '"Inter", "Inter Placeholder", sans-serif !important'
  };
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement | null>(null);

  const enter = () => setOpen(true);
  const leave = () => setOpen(false);

  return (
    <>
      <Box
        ref={anchorRef}
        onMouseEnter={enter}
        onMouseLeave={leave}
        sx={{
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          padding: '4px 8px',
          borderRadius: '6px',
          cursor: 'pointer',
          bgcolor: open ? 'rgba(48, 88, 255, 0.1)' : 'transparent'
        }}
      >
        <Typography variant="h6" sx={{...textStyle}}>
          {label}
        </Typography>
        <KeyboardArrowDownRounded
          sx={{
            transition: 'transform .4s ease-in-out',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            height: '25px',
            width: '25px'
          }}
        />
      </Box>

      <Popper
        onMouseEnter={enter}
        onMouseLeave={leave}
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom"
        transition
        modifiers={[{name: 'offset', options: {offset: [0, 0]}}]}
        sx={{zIndex: 1300, paddingTop: '35px'}}
      >
        {({TransitionProps}) => (
          <Grow {...TransitionProps} style={{transformOrigin: 'top left'}}>
            <Paper
              elevation={8}
              onMouseEnter={enter}
              onMouseLeave={leave}
              sx={{
                minWidth: '284px',
                borderRadius: '15px',
                boxShadow: '0px 0px 8px 1px rgba(0, 0, 0, 0.25)',
                padding: '24px 32px',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                rowGap: '10px',
                flexDirection: 'column'
              }}
            >
              {items.map(({text, href}) => (
                <Box
                  key={text}
                  sx={{
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease-in-out',
                    py: '4px',
                    '&:hover': {
                      backgroundColor: 'rgba(48, 88, 255, 0.1)',
                      '& > :first-of-type': {
                        paddingLeft: '8px'
                      }
                    },
                    width: '100%'
                  }}
                >
                  <Link
                    href={href}
                    underline="none"
                    sx={{width: '100%', display: 'block'}}
                  >
                    <Typography
                      sx={{
                        ...textStyle,
                        transition: 'all 0.24s ease-in-out',
                        '&:hover': {
                          color: '#4611F5'
                        },
                        fontWeight: '400'
                      }}
                    >
                      {text}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}
