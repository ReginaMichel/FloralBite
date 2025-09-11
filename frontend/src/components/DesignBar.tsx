import { Box } from "@mui/material";

export default function DesignBar() {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: {xs:'100%',sm:'70%'},
                // sorgt für zentrierte ausrichtung, weil width 80% linksbündig verursacht.
                mx: 'auto',
                // y-margin
                my: 6,
            }}
        >
            <Box
                sx={{
                    height: '0.2rem',
                    backgroundColor: 'var(--sage-green)',
                    flex: 1,
                    // x-margin zum Bild
                    mx: {xs: 3, sm: 5},
                    borderRadius: '0.2rem'
                }}
            />
            <img src="/assets/Element 8.svg" alt="Zierelement aus drei Möhren" style={{height: '3rem', width: 'auto',}}/>
            <Box
                sx={{
                    height: '0.2rem',
                    backgroundColor: 'var(--sage-green)',
                    flex: 1,
                    // x-margin zum Bild
                    mx: {xs: 3, sm: 5},
                    borderRadius: '0.2rem'
                }}
            />
        </Box>
    )
}