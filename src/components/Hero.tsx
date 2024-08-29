import '../style/hero.css'


import imagen from "../svg/hero/heroImagen.svg";
import { Facebook, Instagram, Tiktok, X, Android, Apple, Youtube } from "../svg/social/SocialSvg";
import HeroLinea from '../svg/hero/heroLinea.svg';
import TopLine from '../svg/hero/topline.svg';
import Cel from '../img/13e52de6cec8eec64c898644e02eb769.png'
import Laptop from '../img/1613b5bbd4358edec59b0b3a706c0d0b.png'

const Hero = () => {
  return (
    <div id="home" className="h-screen bg-white-800 flex flex-col w-full">
      <div className="h-full flex items-center">
        <div className="ml-16 flex max-lg:flex-col justify-center items-center w-full">
          <div className="flex justify-center items-center flex-col h-full space-y-5 ml-10 max-lg:space-y-0 max-lg:space-x-10 max-lg:hidden" id="mcard">
            <div>
              <a className="rounded-full w-10 h-10 flex items-center justify-center svg-s" href="https://www.facebook.com/" target="_blank">
                <svg viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.5 3H18.75C17.0924 3 15.5027 3.65848 14.3306 4.83058C13.1585 6.00269 12.5 7.5924 12.5 9.25V13H8.75V18H12.5V28H17.5V18H21.25L22.5 13H17.5V9.25C17.5 8.91848 17.6317 8.60054 17.8661 8.36612C18.1005 8.1317 18.4185 8 18.75 8H22.5V3Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
            <div>
              <a className="rounded-full w-10 h-10 flex items-center justify-center svg-f" href="https://www.instagram.com/" target="_blank">
                <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.75 2.5H20.25C24.25 2.5 27.5 5.75 27.5 9.75V20.25C27.5 22.1728 26.7362 24.0169 25.3765 25.3765C24.0169 26.7362 22.1728 27.5 20.25 27.5H9.75C5.75 27.5 2.5 24.25 2.5 20.25V9.75C2.5 7.82718 3.26384 5.98311 4.62348 4.62348C5.98311 3.26384 7.82718 2.5 9.75 2.5ZM9.5 5C8.30653 5 7.16193 5.47411 6.31802 6.31802C5.47411 7.16193 5 8.30653 5 9.5V20.5C5 22.9875 7.0125 25 9.5 25H20.5C21.6935 25 22.8381 24.5259 23.682 23.682C24.5259 22.8381 25 21.6935 25 20.5V9.5C25 7.0125 22.9875 5 20.5 5H9.5ZM21.5625 6.875C21.9769 6.875 22.3743 7.03962 22.6674 7.33265C22.9604 7.62567 23.125 8.0231 23.125 8.4375C23.125 8.8519 22.9604 9.24933 22.6674 9.54235C22.3743 9.83538 21.9769 10 21.5625 10C21.1481 10 20.7507 9.83538 20.4576 9.54235C20.1646 9.24933 20 8.8519 20 8.4375C20 8.0231 20.1646 7.62567 20.4576 7.33265C20.7507 7.03962 21.1481 6.875 21.5625 6.875ZM15 8.75C16.6576 8.75 18.2473 9.40848 19.4194 10.5806C20.5915 11.7527 21.25 13.3424 21.25 15C21.25 16.6576 20.5915 18.2473 19.4194 19.4194C18.2473 20.5915 16.6576 21.25 15 21.25C13.3424 21.25 11.7527 20.5915 10.5806 19.4194C9.40848 18.2473 8.75 16.6576 8.75 15C8.75 13.3424 9.40848 11.7527 10.5806 10.5806C11.7527 9.40848 13.3424 8.75 15 8.75ZM15 11.25C14.0054 11.25 13.0516 11.6451 12.3483 12.3483C11.6451 13.0516 11.25 14.0054 11.25 15C11.25 15.9946 11.6451 16.9484 12.3483 17.6517C13.0516 18.3549 14.0054 18.75 15 18.75C15.9946 18.75 16.9484 18.3549 17.6517 17.6517C18.3549 16.9484 18.75 15.9946 18.75 15C18.75 14.0054 18.3549 13.0516 17.6517 12.3483C16.9484 11.6451 15.9946 11.25 15 11.25Z" />
                </svg>

              </a>
            </div>
            <div>
              <a className="rounded-full w-10 h-10 flex items-center justify-center svg-f" href="https://www.tiktok.com/" target="_blank">
                <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.75 2.5V10.5175C12.0191 10.1963 10.2313 10.4163 8.63005 11.1477C7.02876 11.8791 5.69183 13.0863 4.80132 14.6049C3.91081 16.1234 3.51001 17.8796 3.6535 19.6342C3.79699 21.3887 4.4778 23.0564 5.60321 24.4101C6.72862 25.7638 8.24392 26.7377 9.94277 27.1993C11.6416 27.6608 13.4414 27.5874 15.0971 26.9892C16.7528 26.391 18.1838 25.297 19.1953 23.8563C20.2069 22.4155 20.7497 20.6979 20.75 18.9375V14.2675C22.0937 14.839 23.5398 15.1308 25 15.125H26.25V8.125H25C22.6213 8.125 20.75 6.20375 20.75 3.75V2.5H13.75ZM16.25 5H18.36C18.8525 7.775 20.96 9.995 23.75 10.5125V12.535C22.4525 12.345 21.2813 11.8575 20.1963 11.1312L18.25 9.82875V18.9375C18.2499 20.1498 17.8863 21.3343 17.2062 22.3379C16.5261 23.3415 15.5607 24.1182 14.4347 24.5676C13.3088 25.0169 12.0739 25.1184 10.8897 24.8589C9.70543 24.5994 8.62621 23.9907 7.79138 23.1116C6.95655 22.2325 6.40447 21.1233 6.20644 19.9272C6.0084 18.7312 6.17351 17.5032 6.68044 16.402C7.18737 15.3007 8.01284 14.3767 9.05023 13.7493C10.0876 13.1219 11.2893 12.82 12.5 12.8825V14.8875C11.6856 14.8247 10.8712 15.0088 10.163 15.4159C9.4548 15.8229 8.88578 16.434 8.53018 17.1694C8.17458 17.9047 8.04891 18.7302 8.16958 19.5381C8.29024 20.346 8.65164 21.0987 9.2066 21.6981C9.76157 22.2974 10.4843 22.7156 11.2805 22.8979C12.0767 23.0803 12.9094 23.0184 13.6699 22.7203C14.4305 22.4223 15.0834 21.9019 15.5437 21.227C16.004 20.5522 16.2501 19.7543 16.25 18.9375V5ZM10.625 18.9375C10.625 18.5231 10.7896 18.1257 11.0827 17.8326C11.3757 17.5396 11.7731 17.375 12.1875 17.375C12.6019 17.375 12.9993 17.5396 13.2924 17.8326C13.5854 18.1257 13.75 18.5231 13.75 18.9375C13.75 19.3519 13.5854 19.7493 13.2924 20.0424C12.9993 20.3354 12.6019 20.5 12.1875 20.5C11.7731 20.5 11.3757 20.3354 11.0827 20.0424C10.7896 19.7493 10.625 19.3519 10.625 18.9375Z" />
                </svg>

              </a>
            </div>
            <div>
              <a className="rounded-full w-10 h-10 flex items-center justify-center svg-f" href="https://www.x.com/" target="_blank">
                <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.1887 3.75H26.0225L17.6475 13.2812L27.5 26.25H19.785L13.7437 18.3837L6.83 26.25H2.9925L11.9513 16.0563L2.5 3.75H10.41L15.8725 10.94L22.1887 3.75ZM20.8438 23.965H22.9688L9.255 5.915H6.975L20.8438 23.965Z" />
                </svg>

              </a>
            </div>
            <div>
              <a className="rounded-full w-10 h-10 flex items-center justify-center svg-s" href="https://www.youtube.com/" target="_blank">
                <svg viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.91503 7.00875C10.3792 6.83625 13.0738 6.75 14.9988 6.75C16.9238 6.75 19.6194 6.83646 23.0857 7.00937C23.9927 7.05465 24.8525 7.42754 25.5054 8.05882C26.1583 8.6901 26.5599 9.53687 26.6357 10.4419C26.7944 12.3377 26.8738 14.0079 26.8738 15.4525C26.8738 16.9142 26.7925 18.6075 26.63 20.5325C26.5546 21.4271 26.1607 22.265 25.5199 22.8938C24.8791 23.5227 24.034 23.9008 23.1382 23.9594C20.1752 24.1531 17.4621 24.25 14.9988 24.25C12.5363 24.25 9.8242 24.1531 6.86253 23.9594C5.96695 23.9008 5.12207 23.523 4.48134 22.8945C3.84061 22.2661 3.44652 21.4287 3.37065 20.5344C3.20607 18.5948 3.12378 16.9008 3.12378 15.4525C3.12378 14.0212 3.20399 12.3504 3.3644 10.44C3.44045 9.53522 3.8422 8.68875 4.49506 8.05773C5.14792 7.42671 6.00756 7.05398 6.9144 7.00875H6.91503Z" stroke-width="2" stroke-linejoin="round" />
                  <path d="M13.125 12.7563V18.2538C13.125 18.3506 13.1512 18.4456 13.2008 18.5287C13.2505 18.6118 13.3217 18.6799 13.407 18.7258C13.4923 18.7716 13.5884 18.7935 13.6851 18.7891C13.7818 18.7846 13.8755 18.7541 13.9563 18.7006L18.0794 15.9756C18.1531 15.9271 18.2136 15.861 18.2556 15.7834C18.2976 15.7058 18.3198 15.619 18.3202 15.5307C18.3205 15.4424 18.2991 15.3555 18.2577 15.2775C18.2164 15.1995 18.1564 15.133 18.0831 15.0838L13.9594 12.3113C13.8788 12.2571 13.785 12.2259 13.688 12.2209C13.591 12.216 13.4945 12.2374 13.4088 12.2831C13.3231 12.3287 13.2515 12.3968 13.2015 12.48C13.1515 12.5633 13.125 12.6585 13.125 12.7556V12.7563Z" stroke-width="2" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex items-center ml-8 h-full space-y-5 max-lg:px-0 flex-row mt-20" id="mcard">
            <div className="py-8  px-20 w-fit rounded-lg space-y-8 max-lg:text-center max-lg:w-full ">
              <div className=''>
                <div className='h-full flex'>
                  <p className='font-bold px-7 py-3 super-1 text-white rounded-full gradiente'>¿Eres influencer o emprendedor?</p>
                </div>
              </div>
              <div className='super-8 text-left font-semibold max-lg:text-center flex items-center flex-col'>
                <div className='relative w-full'>
                  <p className='relative tracking-tighter'>Crea impacto,</p>
                  <img className="h-full absolute" style={{ top: '-55px', right: '25px' }} src={TopLine} />
                </div>
                <div className='relative'>
                  <p className='relative tracking-tighter'>haz conexiones</p>
                  <div className='w-full flex justify-end'>
                    <img className="h-10 w-9/12 right-0 " src={HeroLinea} />
                  </div>
                </div>
              </div>
              <p className='font-medium tamanio leading-10 ' style={{ color: '#717177' }}>Descubre oportunidades únicas para colaborar, crecer y<br /> dar vida a tu marca o contenido con Influgo</p>
              <div className="flex  text-white space-x-8 max-lg:justify-center max-lg:flex-col max-lg:space-y-3 max-lg:space-x-0 ">
                <button className="buttonHero">
                  <img src={Android} className="icon" alt="Android" />
                  <p className="text super-2">Google Play</p>
                </button>
                <button className="buttonHero">
                  <img src={Apple} className="icon apple" alt="AppStore" />
                  <p className="text super-2">App Store</p>
                </button>
              </div>
            </div>
          </div>
          <div className=" justify-center align-center flex max-lg:none z-10 mr-5  max-lg:mx-auto h-full max-sm:hidden mt-36" style={{ flex: '1.2' }}>
            <div className='flex-1 flex h-full w-full'>
              <svg viewBox="-190 0 1120 900" className='h-full' fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group 165">
                  <rect id="Izquierda" width="350" height="510" fill="#E8B8C9" rx="50" className='rounded-md' />
                  <defs>
                    <clipPath id="clipPatha">
                      <rect x="0" y="0" width="350" height="510" rx="50" />
                    </clipPath>
                  </defs>
                  <image
                    id="Izquierda"
                    href={Laptop}
                    x="0"
                    y="0"
                    width="350"
                    height="510"
                    clip-path="url(#clipPatha)"
                    preserveAspectRatio="xMidYMid slice"
                    className='rounded-md object-cover '
                  />
                  <rect id="Derecha" x="200" y="250" width="350" height="510" fill="#DAD5F3" rx="50" />
                  <defs>
                    <clipPath id="clipPath">
                      <rect x="200" y="250" width="350" height="510" rx="50" />
                    </clipPath>
                  </defs>
                  <image
                    id="Derecha"
                    className='rounded-md object-cover '
                    href={Cel}
                    x="200"
                    clip-path="url(#clipPath)"
                    y="250"
                    width="350"
                    height="510"
                    preserveAspectRatio="xMidYMid slice"
                  />
                  <g id="Abajo">
                    <g id="Rectangle 11" filter="url(#filter0_d_2739_5575)">
                      <path d="M301.741 420.631C301.975 452.026 327.615 477.387 359.011 477.277C390.407 477.166 415.669 451.626 415.435 420.231L414.352 274.691C413.885 211.901 362.604 161.179 299.813 161.4L301.741 420.631Z" fill="url(#paint0_linear_2739_5575)" />
                    </g>
                    <g id="Ellipse 99" filter="url(#filter1_d_2739_5575)">
                      <ellipse cx="56.3671" cy="56.5336" rx="56.3671" ry="56.5336" transform="matrix(-0.53223 -0.8466 -0.854147 0.520031 436.577 609.441)" fill="url(#paint1_linear_2739_5575)" />
                    </g>
                  </g>
                  <g id="Arriba">
                    <g id="Rectangle 12" filter="url(#filter2_d_2739_5575)">
                      <path d="M256.92 375.438C256.701 344.035 231.066 318.754 199.663 318.973C168.26 319.192 142.979 344.827 143.198 376.23L144.211 521.64C144.648 584.447 195.918 635.007 258.725 634.57L256.92 375.438Z" fill="url(#paint2_linear_2739_5575)" />
                    </g>
                    <g id="Ellipse 99_2" filter="url(#filter3_d_2739_5575)">
                      <ellipse cx="56.3671" cy="56.5336" rx="56.3671" ry="56.5336" transform="matrix(-0.53223 -0.8466 -0.854147 0.520031 279.577 239.441)" fill="url(#paint3_linear_2739_5575)" />
                    </g>
                  </g>
                </g>
                <defs>
                  <filter id="filter0_d_2739_5575" x="274.812" y="149.399" width="175.624" height="375.878" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="5" dy="18" />
                    <feGaussianBlur stdDeviation="15" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.721569 0 0 0 0 0.615686 0 0 0 0 0.615686 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2739_5575" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2739_5575" result="shape" />
                  </filter>
                  <filter id="filter1_d_2739_5575" x="276.432" y="523.062" width="173.712" height="172.115" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="5" dy="18" />
                    <feGaussianBlur stdDeviation="15" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.721569 0 0 0 0 0.615686 0 0 0 0 0.615686 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2739_5575" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2739_5575" result="shape" />
                  </filter>
                  <filter id="filter2_d_2739_5575" x="118.197" y="306.972" width="175.528" height="375.601" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="5" dy="18" />
                    <feGaussianBlur stdDeviation="15" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.721667 0 0 0 0 0.617626 0 0 0 0 0.617626 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2739_5575" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2739_5575" result="shape" />
                  </filter>
                  <filter id="filter3_d_2739_5575" x="119.432" y="153.062" width="173.712" height="172.115" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="5" dy="18" />
                    <feGaussianBlur stdDeviation="15" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.721569 0 0 0 0 0.615686 0 0 0 0 0.615686 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2739_5575" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2739_5575" result="shape" />
                  </filter>
                  <linearGradient id="paint0_linear_2739_5575" x1="405.218" y1="508.421" x2="355.953" y2="127.339" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#1B00BF" />
                    <stop offset="1" stop-color="#941D77" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_2739_5575" x1="146.023" y1="29.5122" x2="33.5866" y2="192.736" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#1B00BF" />
                    <stop offset="1" stop-color="#9F185D" />
                  </linearGradient>
                  <linearGradient id="paint2_linear_2739_5575" x1="148.229" y1="325.48" x2="220.519" y2="687.914" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#C20B0C" />
                    <stop offset="1" stop-color="#6F41AA" />
                  </linearGradient>
                  <linearGradient id="paint3_linear_2739_5575" x1="146.023" y1="29.5122" x2="33.5866" y2="192.736" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#C20B0C" />
                    <stop offset="1" stop-color="#5A33FF" />
                  </linearGradient>
                </defs>
              </svg>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
