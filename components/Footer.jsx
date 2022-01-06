import SubFooter from './subcomponents/SubFooter';
import LowestFooter from './subcomponents/LowestFooter';

const Footer = () => {
  const footerData = [
    {
      id: '1',
      title: 'Support',
      items: [
        'Help Center',
        'Safety information',
        'Cancellation options',
        'Our COVID-19 Response',
        'Supporting people with disabilities',
        'Report a neighborhood concern',
      ],
    },
    {
      id: '2',
      title: 'Community',
      items: [
        'Airbnb.org: disaster relief housing',
        'Support Afghan refugees',
        'Celebrating diversity & belonging',
        'Combating discrimination',
      ],
    },
    {
      id: '3',
      title: 'Hosting',
      items: [
        'Try hosting',
        'AirCover: protection for Hosts',
        'Explore hosting resources',
        'Visit our community forum',
        'How to host responsibly',
      ],
    },
    {
      id: '4',
      title: 'About',
      items: [
        'Newsroom',
        'Learn about new features',
        'Letter from our founders',
        'Careers',
        'Investors',
      ],
    },
  ];
  return (
    <div>
      {footerData.map((data) => {
        return (
          <SubFooter title={data.title} items={data.items} key={data.id} />
        );
      })}
      <LowestFooter />
    </div>
  );
};

export default Footer;
