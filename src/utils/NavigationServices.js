import React from 'react';

export const navigationRef = React.createRef();

export function navigate(
    routeName,
    params = {},
) {
    navigationRef.current?.navigate(routeName, params);
}

export function goBack() {
    return navigationRef?.current.goBack();
}