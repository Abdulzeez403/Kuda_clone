import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import {
    BottomModal,
    ModalContent,
    ModalFooter,
    ModalButton,
    ModalTitle,
    SlideAnimation,
} from "react-native-modals";

interface IProps {
    isModalVisible: boolean;
    onDismiss: () => void;
    onBackdropPress: () => void;
    children: React.ReactNode;


}

const ApBottomModal: React.FC<IProps> = ({ isModalVisible, onDismiss, onBackdropPress, children }) => {
    return (
        <View>
            <BottomModal
                isModalVisible={isModalVisible}
                swipeThreshold={200}
                onBackdropPress={onBackdropPress}
                swipeDirection={["up", "down"]}
                footer={
                    <ModalFooter>
                        <ModalButton
                            text="Apply"
                            style={styles.ModalButtonStyle}
                            onPress={onBackdropPress}
                        />
                    </ModalFooter>
                }
                modalTitle={<ModalTitle title="Select rooms and guests" />}
                modalAnimation={
                    new SlideAnimation({
                        slideFrom: "bottom",
                    })
                }
                // onHardwareBackPress={onBackdropPress}
                visible={isModalVisible}
                onTouchOutside={onBackdropPress}
            >
                <ModalContent >
                    {children}

                </ModalContent>
            </BottomModal>
        </View>
    )
}

export default ApBottomModal;

const styles = StyleSheet.create({})