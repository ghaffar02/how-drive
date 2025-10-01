import CustomButton from '@/components/student-dashboard/CustomButton';
import CustomCard from '@/components/student-dashboard/Dropdown';
import CustomTextField from '@/components/student-dashboard/InputField';
import localFont from '@/utils/themes';
import {Box, Divider, Typography} from '@mui/material';
import {useState} from 'react';

const formFields = [
  {
    label: 'First name',
    placeholder: 'Daniel'
  },
  {
    label: 'Last name',
    placeholder: 'Mustermann'
  },
  {
    label: 'Email',
    placeholder: 'd.mustermann@gmail.com'
  },
  {
    label: 'Place of residence',
    placeholder: 'Hamburg'
  },
  {
    label: 'Phone number',
    placeholder: '01518745692'
  },
  {
    label: 'Driving school',
    placeholder: 'Mundsburg'
  }
];
export default function Account() {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <Box
      sx={{
        width: '100%',
        // height: '100%',
        mt: '32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: '32px'
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: {xs: 'column', md: 'row'},
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{width: '100%'}}>
          <Typography
            sx={{
              ...localFont.inter18,
              fontWeight: 500,
              fontFamily: '"Inter", sans-serif !important'
            }}
          >
            Konto
          </Typography>
          <Typography
            sx={{
              ...localFont.inter16,
              fontFamily: '"Inter", sans-serif !important',
              fontWeight: 300
            }}
          >
            Persönliche Daten, Konto löschen, etc.
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            justifyContent: 'end'
          }}
        >
          <CustomButton
            label="Abbrechen"
            bgColor="rgba(248, 250, 252, 0)"
            hoverTextcolor="#fff"
            sx={{border: '1px solid #a1a1aaff', color: '#000'}}
          />
          <CustomButton label="save" sx={{}} />
        </Box>
      </Box>
      <Box width="100%">
        <Divider
          sx={{
            borderTop: '1px solid transparent',
            borderImage:
              'linear-gradient(90deg, rgba(245,245,245,0.6) 0%, rgba(203,203,203,1) 50%, rgba(245,245,245,0.6) 100%) 1'
            // marginBottom: '32px'
          }}
        />
      </Box>

      <Box sx={{width: '100%'}}>
        <Typography
          sx={{
            ...localFont.inter16,
            fontWeight: 500,
            fontFamily: '"Inter", sans-serif !important',
            mb: '32px'
          }}
        >
          Konto
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: {xs: 'column'},
            gap: '20px',
            alignItems: 'start',
            justifyContent: 'space-between'
          }}
        >
          {formFields.map((items, i) => {
            return (
              <Box
                key={i}
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: {xs: 'column', lg: 'row'},
                  gap: {xs: '8px'},
                  alignItems: 'start',
                  justifyContent: 'space-between'
                }}
              >
                <Typography
                  sx={{
                    ...localFont.inter14,
                    width: '100%',
                    maxWidth: '400px',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: 400,
                    textAlign: 'left'
                    // mt: {xs: '8px', lg: '0px'}
                  }}
                >
                  {items.label}
                </Typography>
                <CustomTextField
                  labal={items.placeholder}
                  sx={{textAlign: 'end', maxWidth: {lg: '403px'}}}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box width="100%">
        <Divider
          sx={{
            // mt: '32px',
            borderTop: '1px solid transparent',
            borderImage:
              'linear-gradient(90deg, rgba(245,245,245,0.6) 0%, rgba(203,203,203,1) 50%, rgba(245,245,245,0.6) 100%) 1'
            // marginBottom: '32px'
          }}
        />
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: {xs: 'column', lg: 'row'},
          // flexWrap: 'wrap',
          gap: '16px',
          alignItems: 'start'
          // justifyContent: 'space-between'
          // mb: '12px'
        }}
      >
        <Box sx={{width: '100%', maxWidth: {lg: '900px'}}}>
          <Typography
            sx={{
              ...localFont.inter16,
              fontWeight: 500,
              fontFamily: '"Inter", sans-serif !important'
            }}
          >
            Delete account
          </Typography>
          <Typography
            sx={{
              width: '100%',
              ...localFont.inter14,
              fontFamily: '"Inter", sans-serif !important',
              fontWeight: 300
            }}
          >
            If you delete your account, you will lose access to your data and
            the driver&apos;s license process. We will permanently delete your
            personal data.
          </Typography>
        </Box>
        <Box
          sx={{
            width: {xs: '100%', lg: '75%'},
            p: '4px',
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            justifyContent: 'flex-end'
            // justifyContent: 'space-between'
          }}
        >
          <Box sx={{width: '100%', position: 'relative'}}>
            <CustomButton
              label="Delete account"
              bgColor="rgb(220, 38, 38)"
              hoverColor="#991919"
              sx={{}}
              onClick={() => setOpenDropdown(() => !openDropdown)}
            />

            {openDropdown && (
              <Box
                sx={{
                  position: 'absolute',
                  bottom: {xs: -40, md: -40, lg: -100},
                  right: {xs: '-80px', sm: -310, lg: -30},
                  width: '100%'
                  // maxWidth: '532px'
                }}
              >
                <CustomCard onClose={() => setOpenDropdown(true)} />
              </Box>
            )}
          </Box>
          <CustomButton
            label="learn more"
            bgColor="rgba(248, 250, 252, 0)"
            hoverTextcolor="#fff"
            sx={{border: '1px solid #a1a1aaff', color: '#000'}}
          />
        </Box>
      </Box>
    </Box>
  );
}
