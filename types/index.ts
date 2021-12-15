export interface LoginUser {
  userId: string;
  avatarUrl: string;
}

export interface Event {
  eventId: string;
  title: string;
  date: string;
  location: string;
  state: string;
  participants: number;
  hostId: string;
  hostName: string;
  avatarUrl: string;
}

export interface EventDetail {
  eventId: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  location: string;
  hostId: string;
  hostName: string;
  avatarUrl: string;
}

export interface Participant {
  participantId: string;
  userId: string;
  userName: string;
  avatarUrl: string;
  state: string;
}

export interface Talk {
  talkId: string;
  title: string;
  userId: string;
  userName: string;
  avatarUrl: string;
}

export interface TalkDetail {
  talkId: string;
  title: string;
  eventId: string;
  eventName: string;
  eventState: string;
  state: string;
  userId: string;
  userName: string;
  avatarUrl: string;
}

export interface User {
  userId: string;
  avatarUrl: string;
  name: string;
  githubId: string;
  twitterId: string;
}

export interface Suggest {
  theme: string;
}
