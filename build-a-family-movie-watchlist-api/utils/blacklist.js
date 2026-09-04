const tokensBlacklist = new Set();

export function blacklistToken(token) {
    return tokensBlacklist.add(token);
}

export function isTokenBlacklisted(token) {
    return tokensBlacklist.has(token);
}
