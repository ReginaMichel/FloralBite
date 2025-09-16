import {Box, IconButton} from "@mui/material";

export default function InstagramPromotion() {
    return (
        <Box sx={{textAlign: 'center', py: { xs: '2%', sm: '1.5%' },}}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 0, // Abstand zwischen Text und Icon schon durch den Mindestfreiabstand gegeben
                    flexWrap: 'wrap', // Responsives Verhalten
                }}
            >
                <h2 style={{ margin: 0 }}>Du findest mich auch auf Instagram</h2>
                {/* a -> rendere es als Link und nicht als Button
                    _blank -> öffne es in einem neuem Tab
                    noopener -> für die sicherheit, damit der neue Tab keinen Bezug zum bisherigen bekommt
                    aria_label -> für Screenreader */}
                <IconButton
                    component="a"
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener"
                    aria-label="Instagram"
                    disableRipple
                    sx={{
                        p: 0,
                        m: 'calc(3.5rem / 2)', // halb so viel wie max. Iconhöhe, von Instagram vorgegeben
                    }}
                >
                    <Box
                        component="img"
                        src="/assets/Instagram_Glyph_PestoGreen.svg"
                        alt="Instagram"
                        sx={{
                            height: { xs: '2.5rem', sm: '3.5rem' }, // Instagram-Mindestgröße > 29px
                            width: 'auto',
                            display: 'block',
                        }}
                    />
                </IconButton>
            </Box>
        </Box>
    )
}