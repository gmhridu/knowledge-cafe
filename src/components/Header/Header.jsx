import profile from '../../assets/images/profile.png';

const Header = () => {
  return (
    <div className="flex justify-between items-center my-3 md:my-6 border-b-2">
      <h1 className="text-2xl md:text-4xl font-bold">Knowledge Cafe</h1>
      <img className='mb-4' src={profile} alt="profile" />
    </div>
  );
};

export default Header;