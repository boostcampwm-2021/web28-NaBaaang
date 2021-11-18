const ROLE = {
    NONE: 'NONE',
    READ: 'READ',
    WRITE: 'WRITE',
    ALL: 'ALL',
};

const PAGE_ROLE = {
    LiveCollection: ROLE.READ,
    Channel: ROLE.READ,
};

export { ROLE, PAGE_ROLE };
