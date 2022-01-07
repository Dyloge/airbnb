import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dummyData = [
    {
      city: 'Phonix',
      commonwealth: 'Arizona',
      id: 1,
    },
    {
      city: 'Canmore',
      commonwealth: 'Alberta',
      id: 2,
    },
    {
      city: 'Mijas',
      commonwealth: 'Andalusia',
      id: 3,
    },
    {
      city: 'Jasper',
      commonwealth: 'Arkansas',
      id: 4,
    },
    {
      city: 'Phonix',
      commonwealth: 'Arizona',
      id: 5,
    },
    {
      city: 'Canmore',
      commonwealth: 'Alberta',
      id: 6,
    },
    {
      city: 'Mijas',
      commonwealth: 'Andalusia',
      id: 7,
    },
    {
      city: 'Jasper',
      commonwealth: 'Arkansas',
      id: 8,
    },
    {
      city: 'Phonix',
      commonwealth: 'Arizona',
      id: 9,
    },
    {
      city: 'Canmore',
      commonwealth: 'Alberta',
      id: 10,
    },
    {
      city: 'Mijas',
      commonwealth: 'Andalusia',
      id: 11,
    },
    {
      city: 'Jasper',
      commonwealth: 'Arkansas',
      id: 12,
    },
  ];
  const dummyData2 = [
    {
      city: 'Lake Martin',
      commonwealth: 'Alabama',
      id: 1,
    },
    {
      city: 'Greer',
      commonwealth: 'Arizona',
      id: 2,
    },
    {
      city: 'North Rim',
      commonwealth: 'Arizona',
      id: 3,
    },
    {
      city: 'Lake Pawel',
      commonwealth: 'Arizona',
      id: 4,
    },
    {
      city: 'Pine-top Lakeside',
      commonwealth: 'Arizona',
      id: 5,
    },
    {
      city: 'Streaky Bay',
      commonwealth: 'Australia',
      id: 6,
    },
    {
      city: 'Pyson',
      commonwealth: 'Arizona',
      id: 7,
    },
    {
      city: 'Dinner Plain',
      commonwealth: 'Australia',
      id: 8,
    },
    {
      city: 'Phonix',
      commonwealth: 'Arizona',
      id: 9,
    },
    {
      city: 'Canmore',
      commonwealth: 'Alberta',
      id: 10,
    },
    {
      city: 'Mijas',
      commonwealth: 'Andalusia',
      id: 11,
    },
    {
      city: 'Jasper',
      commonwealth: 'Arkansas',
      id: 12,
    },
  ];

  return (
    <div>
      <div className='text-4xl font-semibold mt-20 ml-12'>
        Inspiration for future getaways
      </div>

      <Box sx={{ width: '90%', margin: '20px' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant='scrollable'
            scrollButtons
            allowScrollButtonsMobile
            aria-label='basic tabs example'
            TabIndicatorProps={{ style: { background: 'black' } }}
            textColor='black'>
            <Tab
              label='Destinations for art & culture'
              style={{
                fontSize: '1.15rem',
                fontWeight: 'semibold',
                textTransform: 'capitalize',
              }}
              {...a11yProps(0)}
            />
            <Tab
              label='Destinations for outdoor adventure'
              style={{
                fontSize: '1.15rem',
                fontWeight: 'semibold',
                textTransform: 'capitalize',
              }}
              {...a11yProps(1)}
            />
            <Tab
              label='Mountain cabins'
              style={{
                fontSize: '1.15rem',
                fontWeight: 'semibold',
                textTransform: 'capitalize',
              }}
              {...a11yProps(2)}
            />
            <Tab
              label='Beach destinations'
              style={{
                fontSize: '1.15rem',
                fontWeight: 'semibold',
                textTransform: 'capitalize',
              }}
              {...a11yProps(3)}
            />
            <Tab
              label='Popular destinations'
              style={{
                fontSize: '1.15rem',
                fontWeight: 'semibold',
                textTransform: 'capitalize',
              }}
              {...a11yProps(4)}
            />
            <Tab
              label='Unique Stays'
              style={{
                fontSize: '1.15rem',
                fontWeight: 'semibold',
                textTransform: 'capitalize',
              }}
              {...a11yProps(5)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className='flex flex-wrap'>
            {dummyData.map((item) => (
              <div className='w-1/3 h-20 cursor-pointer' key={item.id}>
                <div className='text-lg'>{item.city}</div>
                <div className='text-lg text-slate-400'>
                  {item.commonwealth}
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className='flex flex-wrap'>
            {dummyData2.map((item) => (
              <div className='w-1/3 h-20 cursor-pointer' key={item.id}>
                <div className='text-lg'>{item.city}</div>
                <div className='text-lg text-slate-400'>
                  {item.commonwealth}
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className='flex flex-wrap'>
            {dummyData.map((item) => (
              <div className='w-1/3 h-20 cursor-pointer' key={item.id}>
                <div className='text-lg'>{item.city}</div>
                <div className='text-lg text-slate-400'>
                  {item.commonwealth}
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className='flex flex-wrap'>
            {dummyData2.map((item) => (
              <div className='w-1/3 h-20 cursor-pointer' key={item.id}>
                <div className='text-lg'>{item.city}</div>
                <div className='text-lg text-slate-400'>
                  {item.commonwealth}
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <div className='flex flex-wrap'>
            {dummyData.map((item) => (
              <div className='w-1/3 h-20 cursor-pointer' key={item.id}>
                <div className='text-lg'>{item.city}</div>
                <div className='text-lg text-slate-400'>
                  {item.commonwealth}
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <div className='flex flex-wrap'>
            {dummyData2.map((item) => (
              <div className='w-1/3 h-20 cursor-pointer' key={item.id}>
                <div className='text-lg'>{item.city}</div>
                <div className='text-lg text-slate-400'>
                  {item.commonwealth}
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}
