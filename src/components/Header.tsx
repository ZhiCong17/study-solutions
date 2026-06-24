import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

function Header() {
  return (
    <header className='bg-[#205781] '>
      <div className='text-white flex justify-between p-2 md:p-4 items-center max-w-7xl mx-auto'>
        <img
          className='w-32 md:w-48 object-contain'
          src='/src/assets/logo.png'
          alt='study solutions'
        />
        <div className='flex flex-col justify-center gap-2 md:gap-4'>
          <p className='text-base md:text-xl flex items-center gap-2'>
            <LocalPhoneIcon />
            (+65) 9111 1111
          </p>
          <p className='text-base md:text-xl flex items-center gap-2'>
            <EmailIcon />
            example@gmail.com
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
