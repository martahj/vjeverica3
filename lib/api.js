// @flow
import { post, get } from './fetch';

// TODO make this dynamic
const serverLocation = 'http://localhost:3000';

type Error = {
  message: string,
};


/*
 * Authentication Routes
*/

type LoginCredentials = {
  email: string,
  password: string,
};

type User = {
  admin: boolean,
  email: string,
};

type AuthenticationSuccess = {
  token: string,
  user: User,
};

const authUrl = `${serverLocation}/auth`;
const signupUrl = `${authUrl}/signup`;
const loginUrl = `${authUrl}/login`;
// const logoutUrl = `${authUrl}/logout`;

export const signup = (
  credentials: LoginCredentials,
): Promise<AuthenticationSuccess | Error> => post(signupUrl, credentials);

export const login = (
  credentials: LoginCredentials,
): Promise<AuthenticationSuccess | Error> => post(loginUrl, credentials);

/*
 * Event routes
*/


const eventsUrl = `${serverLocation}/events`;

export const getEvents = (): Promise<Object> => get(eventsUrl);
