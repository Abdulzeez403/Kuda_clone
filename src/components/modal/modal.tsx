// import React, { useState } from "react";
// import Modal from "react-native-modal";


// interface IProps {
//     children: React.ReactNode;
//     isVisible: boolean;
//     onOpen?: () => void;
//     onDismiss: () => void;
//     onBackdropPress: () => void;
// }

// const ModalTester: React.FC<IProps> = ({ isVisible, onDismiss, onOpen, children, onBackdropPress }) => {

//     return (
//         <Modal
//             // onOpen={onOpen}
//             isVisible={isVisible}
//             onDismiss={onDismiss}
//             onBackdropPress={onBackdropPress}
//             // onSwipeComplete={toggleModal}
//             swipeDirection={['up']}
//             propagateSwipe
//             animationInTiming={500}
//             animationOutTiming={500}
//             backdropTransitionInTiming={500}
//             backdropTransitionOutTiming={500}

//         >
//             {children}
//         </Modal>
//     );
// }

// export default ModalTester;