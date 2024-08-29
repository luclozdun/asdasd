import '../style/hero.css'
import Button from '@mui/material/Button';
import logoImg from "../svg/downloadPage/downloadPageCohete.svg";

const DownloadPage = () => {


  return (
    <div id="download" className="h-screen bg-blue-500 flex justify-center items-center relative p-36 max-lg:p-0 overflow-hidden box-border">
    <div className="bg-white w-full h-full p-5 rounded-lg text-center flex justify-center items-center flex-col text-white text-5xl bg-opacity-20 border border-s-white font-semibold space-y-5 max-lg:h-5/6 max-lg:text-xl max-lg:w-5/6 max-lg:py-0 box-border ">
        <div className="w-20 h-20 mb-3">
          <img src={logoImg} width="100%" height="100%"/>
        </div>
        <p>¿Todo listo para dar un</p>
        <p>empujón a tu contenido o a tus ventas</p>
        <p>con Influgo?</p>
        <Button
               variant='outlined'
               sx={{
                borderRadius: '9999px', // Ensure the button is fully rounded
                textTransform: 'none', // Prevent the text from being transformed to uppercase
                '&:hover' : {
                  borderColor: 'white',
                }
               }}
               className='rounded-full bg-gradient-to-r from-white to-white hover:from-red-500 hover:to-purple-500 hover:text-white transition duration-300'
              >
                Descargar
              </Button>
    </div>
</div>

  );
};

export default DownloadPage;
