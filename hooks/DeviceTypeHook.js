import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';

const useDeviceTypeHook = () => {
    const theme = useTheme();

    const isMediumDevice = useMediaQuery(theme.breakpoints.only('md'));
    const isSmallDevice = useMediaQuery(theme.breakpoints.down('sm'));
    const extraLargeDevice = useMediaQuery(theme.breakpoints.up('md'));
    const isLargeDevice = useMediaQuery(theme.breakpoints.not('md')) && !isSmallDevice && extraLargeDevice;

    return {
        isMediumDevice,
        isSmallDevice,
        isLargeDevice,
        extraLargeDevice,
    };
};

export default useDeviceTypeHook;
