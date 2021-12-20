export interface LoginUser {
  userId: string;
  avatarUrl: string;
}

export interface Event {
  eventId: string;
  eventTitle: string;
  date: string;
  location: string;
  eventState: "private" | "limited" | "public";
  participants: number;
  hostId: string;
  hostName: string;
  avatarUrl: string;
}

export interface EventDetail {
  eventId: string;
  eventTitle: string;
  eventDescription: string;
  startTime: string;
  endTime: string;
  location: string;
  eventState: "private" | "limited" | "public";
  hostId: string;
  hostName: string;
  avatarUrl: string;
}

export interface Participant {
  participantId: string;
  userId: string;
  userName: string;
  avatarUrl: string;
  participantState: "valid" | "pending" | "banned";
}

export interface Talk {
  talkId: string;
  talkTitle: string;
  userId: string;
  userName: string;
  avatarUrl: string;
}

export interface TalkDetail {
  talkId: string;
  talkTitle: string;
  eventId: string;
  eventTitle: string;
  eventState: "private" | "limited" | "public";
  talkState: "private" | "limited" | "public";
  userId: string;
  userName: string;
  avatarUrl: string;
}

export interface User {
  userId: string;
  avatarUrl: string;
  userName: string;
  githubId: string;
  twitterId: string;
}

export interface Suggest {
  theme: string;
}

// api
export interface GetEventsResponse {
  events: Event[];
  fullCount: number;
}

export interface GetEventResponse {
  event: EventDetail;
  joined: boolean;
  viewState: "valid" | "request" | "pending" | "banned";
}

export interface CreateEventRequest {
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  location: string;
  eventState: "private" | "limited" | "public";
  hostId: string;
}

export interface UpdateEventRequest {
  eventId: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  location: string;
  eventState: "private" | "limited" | "public";
}

export interface GetParticipantsResponse {
  participants: Participant[];
  sum: number;
}

export interface CreateParticipantRequest {
  eventId: string;
  participantState: "valid" | "pending";
}

export interface UpdateParticipantRequest {
  participantState: "valid" | "pending" | "banned";
}

export interface GetTalksResponse {
  talks: Talk[];
  fullCount: number;
}

export interface CreateTalkRequest {
  eventId: string;
  title: string;
  talkState: "private" | "limited" | "public";
}

export interface UpdateTalkRequest {
  title: string;
  videoId: string;
  slideUrl: string;
  talkState: "private" | "limited" | "public";
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
  name: string;
  githubId: string;
  twitterId: string;
}
