export function createApiTypes(namePrefix, action = '') {
    return [`${namePrefix}_${action}_REQUEST`, `${namePrefix}_${action}_SUCCESS`, `${namePrefix}_${action}_FAILURE`];
}