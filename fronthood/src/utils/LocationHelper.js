function isLattitudeAndLongitudeEmpty(location) {
    return location.latitude === null || location.longitude === null;
}

export { isLattitudeAndLongitudeEmpty };
