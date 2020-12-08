import React from 'react';

export const NavigationRef = React.createRef();

export function navigate(name, params?){
    NavigationRef.current?.navigate(name, params);
}