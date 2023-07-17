'use client';

import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// import { useTheme } from 'next-themes';
// import React from 'react';

// const DarkModeButton = () => {
//   const { theme, resolvedTheme, setTheme } = useTheme();

//   return (
//     <div className="dark_mode">
//       <input className="dark_mode_input" type="checkbox" id="darkmode-toggle" />
//       <label
//         //@ts-ignore
//         onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
//         className="dark_mode_label"
//         htmlFor="darkmode-toggle"
//       >
//         <svg
//           version="1.1"
//           className="moon"
//           xmlns="http://www.w3.org/2000/svg"
//           xmlnsXlink="http://www.w3.org/1999/xlink"
//           x="0px"
//           y="0px"
//           viewBox="0 0 49.739 49.739"
//           style={{ enableBackground: 'new 0 0 49.739 49.739' }}
//           xmlSpace="preserve"
//         >
//           <path
//             d="M25.068,48.889c-9.173,0-18.017-5.06-22.396-13.804C-3.373,23.008,1.164,8.467,13.003,1.979l2.061-1.129l-0.615,2.268
//          c-1.479,5.459-0.899,11.25,1.633,16.306c2.75,5.493,7.476,9.587,13.305,11.526c5.831,1.939,12.065,1.492,17.559-1.258v0
//          c0.25-0.125,0.492-0.258,0.734-0.391l2.061-1.13l-0.585,2.252c-1.863,6.873-6.577,12.639-12.933,15.822
//          C32.639,48.039,28.825,48.888,25.068,48.889z M12.002,4.936c-9.413,6.428-12.756,18.837-7.54,29.253
//          c5.678,11.34,19.522,15.945,30.864,10.268c5.154-2.582,9.136-7.012,11.181-12.357c-5.632,2.427-11.882,2.702-17.752,0.748
//          c-6.337-2.108-11.473-6.557-14.463-12.528C11.899,15.541,11.11,10.16,12.002,4.936z"
//           />
//         </svg>
//         <svg
//           version="1.1"
//           className="sun"
//           xmlns="http://www.w3.org/2000/svg"
//           xmlnsXlink="http://www.w3.org/1999/xlink"
//           x="0px"
//           y="0px"
//           viewBox="0 0 496 496"
//           style={{ enableBackground: 'new 0 0 496 496' }}
//           xmlSpace="preserve"
//         >
//           <rect
//             x="152.994"
//             y="58.921"
//             transform="matrix(0.3827 0.9239 -0.9239 0.3827 168.6176 -118.5145)"
//             width="40.001"
//             height="16"
//           />
//           <rect
//             x="46.9"
//             y="164.979"
//             transform="matrix(0.9239 0.3827 -0.3827 0.9239 71.29 -12.4346)"
//             width="40.001"
//             height="16"
//           />
//           <rect
//             x="46.947"
//             y="315.048"
//             transform="matrix(0.9239 -0.3827 0.3827 0.9239 -118.531 50.2116)"
//             width="40.001"
//             height="16"
//           />

//           <rect
//             x="164.966"
//             y="409.112"
//             transform="matrix(-0.9238 -0.3828 0.3828 -0.9238 168.4872 891.7491)"
//             width="16"
//             height="39.999"
//           />

//           <rect
//             x="303.031"
//             y="421.036"
//             transform="matrix(-0.3827 -0.9239 0.9239 -0.3827 50.2758 891.6655)"
//             width="40.001"
//             height="16"
//           />

//           <rect
//             x="409.088"
//             y="315.018"
//             transform="matrix(-0.9239 -0.3827 0.3827 -0.9239 701.898 785.6559)"
//             width="40.001"
//             height="16"
//           />

//           <rect
//             x="409.054"
//             y="165.011"
//             transform="matrix(-0.9239 0.3827 -0.3827 -0.9239 891.6585 168.6574)"
//             width="40.001"
//             height="16"
//           />
//           <rect
//             x="315.001"
//             y="46.895"
//             transform="matrix(0.9238 0.3828 -0.3828 0.9238 50.212 -118.5529)"
//             width="16"
//             height="39.999"
//           />
//           <path
//             d="M248,88c-88.224,0-160,71.776-160,160s71.776,160,160,160s160-71.776,160-160S336.224,88,248,88z M248,392
// 				c-79.4,0-144-64.6-144-144s64.6-144,144-144s144,64.6,144,144S327.4,392,248,392z"
//           />
//           <rect x="240" width="16" height="72" />
//           <rect
//             x="62.097"
//             y="90.096"
//             transform="matrix(0.7071 0.7071 -0.7071 0.7071 98.0963 -40.6334)"
//             width="71.999"
//             height="16"
//           />
//           <rect y="240" width="72" height="16" />

//           <rect
//             x="90.091"
//             y="361.915"
//             transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 -113.9157 748.643)"
//             width="16"
//             height="71.999"
//           />
//           <rect x="240" y="424" width="16" height="72" />

//           <rect
//             x="361.881"
//             y="389.915"
//             transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 397.8562 960.6281)"
//             width="71.999"
//             height="16"
//           />
//           <rect x="424" y="240" width="72" height="16" />
//           <rect
//             x="389.911"
//             y="62.091"
//             transform="matrix(0.7071 0.7071 -0.7071 0.7071 185.9067 -252.6357)"
//             width="16"
//             height="71.999"
//           />
//         </svg>
//       </label>
//     </div>
//   );
// };

const DarkModeButton = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#1a7dca',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

export default DarkModeButton;
