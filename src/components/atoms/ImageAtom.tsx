// src/components/atoms/ImageAtom.tsx
import React from "react";
import { Image, ImageStyle } from "react-native";

interface ImageAtomProps {
  uri: string;
  style?: ImageStyle;
}

export const ImageAtom: React.FC<ImageAtomProps> = ({ uri, style }) => (
  <Image source={{ uri }} style={[{ width: 100, height: 100 }, style]} />
);
