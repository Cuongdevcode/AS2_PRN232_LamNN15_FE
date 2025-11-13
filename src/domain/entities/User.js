/**
 * User Entity - Domain Model
 * Represents a user in the system
 */
export class User {
  constructor({
    id,
    email,
    username,
    fullName,
    role, // admin, editor, reader
    avatar,
    bio,
    createdAt
  }) {
    this.id = id;
    this.email = email;
    this.username = username;
    this.fullName = fullName;
    this.role = role;
    this.avatar = avatar;
    this.bio = bio;
    this.createdAt = createdAt;
  }

  isAdmin() {
    return this.role === 'admin';
  }

  isEditor() {
    return this.role === 'editor';
  }

  canCreateNews() {
    return this.role === 'admin' || this.role === 'editor';
  }
}
