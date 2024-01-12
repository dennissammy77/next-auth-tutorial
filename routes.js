/**
 * An array of routes accessible to the public
 * The routes do not require authentication
 */

export const publicRoutes = [
    '/'
]

/**
 * An array of routes used for aunthentication
 * The routes will redirect logged in users to /settings
 */

export const authRoutes = [
    '/auth/login',
    '/auth/register'
];
/**
 * auth prefix used for aunthentication
 * The routes that start with this prefix are used for API authentication purposes
 */
export const apiAuthPrefix = '/api/auth';

/**
 * The default redirect path after logging in
 */

export const DEFAULT_LOGIN_REDIRECT = '/settings'