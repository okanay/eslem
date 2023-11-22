import * as crypto from 'crypto';

export function GenerateRandomToken(length: number) {
  return crypto.randomBytes(length).toString('hex');
}
