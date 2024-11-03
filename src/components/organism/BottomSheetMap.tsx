import React, { useRef, useMemo } from 'react';
import { Pressable, View, StyleSheet, Text, Image, FlatList } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

type BottomSheetModalProps = {
    bottonSheRef: React.RefObject<any>;
    children: React.ReactNode;
};

const BottomSheetModalMap: React.FC<BottomSheetModalProps> = ({ bottonSheRef, children }) => {
    return (
        <RBSheet
            ref={bottonSheRef}
            height={600}
            closeDuration={250}
            draggable={true}
            closeOnPressMask={true}
            dragOnContent={true}
            customStyles={{
                wrapper: {
                    backgroundColor: 'rgba(0,0,0,0.5)',
                },
                draggableIcon: {
                    backgroundColor: 'gray',
                    width: 100,
                },
                container: {
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                }

            }}

        >
            <View>{children}</View>
        </RBSheet>
    )
};

export default BottomSheetModalMap;