import * as React from 'react';
import Box from '@mui/material/Box';
import TabContent from './TabContent';
import { styled } from '@mui/system';
import detalleTitle from '/src/assets/img/characteristicsImg/detailUno.png';
import titleInf from '/src/assets/img/characteristicsImg/title1.png';
type Option = {
    title: string;
    description: string;
};

const colors = {
    primaryGradient: 'radial-gradient(72.62% 269.68% at 43.41% 60.56%, #6504B1 21.57%, rgba(70, 4, 177, 0.01) 100%)',
    secondaryGradient: 'radial-gradient(45.2% 133.21% at 17.98% 4.13%, #C40909 19.27%, rgba(249, 67, 76, 0.01) 100%)',
    tertiaryGradient: 'radial-gradient(22.4% 50.06% at 95.63% 91.26%, #1B00BF 5.08%, rgba(0, 117, 255, 0.01) 100%)',
    gray: '#B0B0B0',
    borderColor: '#6504B1',
};

const StyledButton = styled('button')<{ selected: boolean }>(({ selected }) => ({
    background: 'transparent',
    color: selected ? colors.borderColor : colors.gray,
    border: 'none',
    borderBottom: selected ? `3px solid ${colors.borderColor}` : `3px solid ${colors.gray}`,
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'color 0.3s ease, border-color 0.3s ease',
    fontFamily: 'Poppins, sans-serif',
    '&:hover': {
        color: colors.borderColor,
    },
    width: '100%',
    textAlign: 'center',
    '@media (min-width: 768px)': {
        padding: '16px 32px',
        fontSize: '20px',
    },
}));

function CustomTabPanel(props: { children?: React.ReactNode; value: number; index: number }) {
    const { children, value, index } = props;
    return (
        <div hidden={value !== index} style={{ width: '100%' }}>
            {value === index && (
                <Box
                    sx={{
                        p: 3,
                        display: 'flex',
                        justifyContent: value === 0 ? 'flex-start' : 'flex-end',
                        alignItems: 'center',
                        width: '100%',
                    }}
                >
                    {children}
                </Box>
            )}
        </div>
    );
}

export default function Characteristics() {
    const [value, setValue] = React.useState(0);

    const influencerOptions: Option[] = [
        { title: 'Busca', description: 'Encuentra marcas y eventos que se alinean con tu estilo y valores.' },
        { title: 'Contacta', description: 'Conéctate con emprendedores dispuestos a colaborar.' },
        { title: 'Crea', description: 'Genera contenido atractivo y relevante.' },
        { title: 'Monetiza', description: 'Transforma tu influencia en ingresos de forma segura.' }
    ];

    const emprendedorOptions: Option[] = [
        { title: 'Crea', description: 'Regístrate y anuncia tu evento para atraer a los influencers adecuados' },
        { title: 'Conéctate', description: 'Elige influencers que se alineen con la identidad de tu marca' },
        { title: 'Evalúa', description: 'Analiza tus resultados y ajusta tu estrategia.' },
        { title: 'Crece', description: 'Aumenta tu visibilidad y ventas mediante colaboraciones estratégicas.' }
    ];

    return (
        <Box sx={{
            maxWidth: '1396px',
            height: 'auto',
            gap: '0px',
            opacity: 1,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            '@media (max-width: 768px)': {
                width: '100%',
                height: 'auto',
                padding: '0 16px',
                opacity: 1,
            },
        }}>
            <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                {/* <div className="text-6xl font-bold max-lg:text-center max-lg:text-3xl flex items-center flex-col">
                    <div className="relative w-fit">
                        <p className="relative flex max-lg:hidden">Potencia tu impacto con alianzas</p>
                        <p className="relative hidden max-lg:flex">Potencia tu impacto con alianzas</p>                        
                        <img
                            src={detalleTitle}
                            alt="Subtítulo imagen"
                            className="relative mt-2 max-lg:w-32 max-lg:h-auto w-480 h-auto"
                        />
                    </div>
                    <div className="relative">
                        <p className="relative mt-3">estratégicas</p>
                    </div>
                </div> */}
                <img src={titleInf} width={"1116px"} height={"93px"} />
            </Box>
            <br />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    borderBottom: 'none',
                }}
            >
                <Box sx={{ width: '50%' }}>
                    <StyledButton selected={value === 0} onClick={() => setValue(0)}>
                        Soy influencer
                    </StyledButton>
                </Box>

                <Box sx={{ width: '50%' }}>
                    <StyledButton selected={value === 1} onClick={() => setValue(1)}>
                        Soy emprendedor
                    </StyledButton>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', width: '100%' }}>
                <CustomTabPanel value={value} index={0}>
                    <TabContent options={influencerOptions} selectedTab="influencer" />
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}>
                    <TabContent options={emprendedorOptions} selectedTab="emprendedor" />
                </CustomTabPanel>
            </Box>
        </Box>
    );
}
