// import { Dimensions, StyleSheet, Text, View } from 'react-native'
// import React from 'react';
// import { MotiView } from 'moti';

// const ApPasscode = () => {

//     const { width } = Dimensions.get('window');
//     const numberOfDigits = 4;
//     const keyColor = '#FDFCFD';
//     const pinIndicatorSize = (width / numberOfDigits) * 0.3; // reduce size so it doesn't overflow


//     return (
//         <MotiView
//             style={{
//                 flexDirection: 'row',
//                 gap: pinIndicatorSize / 2,
//                 height: 40,
//                 marginBottom: 60,
//                 alignItems: 'flex-end'
//             }}
//         >
//             {Array(numberOfDigits).fill('').map((_, i) => {
//                 const isSelected = typeof code[i] === 'number'
//                 return (
//                     <MotiView
//                         key={`pin-${i}`}
//                         style={{
//                             backgroundColor: keyColor,
//                             width: pinIndicatorSize,
//                             borderRadius: pinIndicatorSize
//                         }}
//                         transition={{
//                             type: 'timing',
//                             duration: 200
//                         }}
//                         animate={{
//                             height: isSelected ? pinIndicatorSize : 2,
//                         }}
//                     />
//                 )
//             })}
//         </MotiView>
//     )
// }

// export default ApPasscode

// const styles = StyleSheet.create({})