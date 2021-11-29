const ROLE = {
    NONE: 'NONE',
    READ: 'READ',
    WRITE: 'WRITE',
    ALL: 'ALL',
};

const PAGE_ROLE = {
    MAIN: ROLE.READ,
    LIVE_COLLECTION: ROLE.READ,
    CHANNEL: ROLE.READ,
};

export { ROLE, PAGE_ROLE };
