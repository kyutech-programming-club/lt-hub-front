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

// api
export interface GetEventsResponse {
  events: Event[];
  fullCount?: number;
}

export interface GetEventResponse {
  event: EventDetail;
  joined?: boolean;
  state?: string;
}

export interface CreateEventRequest {
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  location: string;
  state: string;
  hostId: string;
}

export interface UpdateEventRequest {
  eventId: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  location: string;
  state: string;
}

export interface GetParticipantsResponse {
  participants: Participant[];
  sum: number;
}

export interface CreateParticipantRequest {
  eventId: string;
  state: string;
}

export interface UpdateParticipantRequest {
  state: string;
}

export interface GetTalksResponse {
  talks: Talk[];
  fullCount: number;
}

export interface CreateTalkRequest {
  eventId: string;
  title: string;
  state: string;
}

export interface UpdateTalkRequest {
  title: string;
  videoId: string;
  slideUrl: string;
  state: string;
}

export interface UpdateOrderRequest {
  eventId: string;
  order: string[];
}

export interface CreateUserRequest {
  name: string;
  avatarUrl: string;
  email: string;
}

export interface UpdateUserRequest {
  userId: string;
  userName: string;
  githubId: string;
  twitterId: string;
}
