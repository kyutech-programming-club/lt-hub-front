export interface CurrentUser {
  token: string | null;
  userId: string | null;
  avatarUrl: string | null;
}

export interface Event {
  eventId: string;
  title: string;
  date: string;
  location: string;
  state: "private" | "limited" | "public";
  participants: number;
  hostId: string;
  hostName: string;
  avatarUrl: string;
}

export interface EventDetail {
  eventId: string;
  title: string;
  Description: string;
  startTime: string;
  endTime: string;
  location: string;
  state: "private" | "limited" | "public";
  hostId: string;
  hostName: string;
  avatarUrl: string;
}

export interface Participant {
  participantId: string;
  userId: string;
  userName: string;
  avatarUrl: string;
  state: "valid" | "pending" | "banned";
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
  state: "private" | "limited" | "public";
  eventId: string;
  eventTitle: string;
  eventState: "private" | "limited" | "public";
  userId: string;
  userName: string;
  avatarUrl: string;
}

export interface User {
  userId: string;
  name: string;
  avatarUrl: string;
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

export interface GetEventDetailResponse {
  event: Event;
  talks: Talk[];
  talkCount: number;
  participants: Participant[];
  participantCount: number;
  joined: boolean;
  viewState: "browsable" | "request" | "pending" | "banned";
}

export interface CreateEventRequest {
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  location: string;
  state: "private" | "limited" | "public";
  hostId: string;
}

export interface UpdateEventRequest {
  eventId: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  location: string;
  state: "private" | "limited" | "public";
}

export interface GetParticipantsResponse {
  participants: Participant[];
  sum: number;
}

export interface CreateParticipantRequest {
  eventId: string;
  state: "valid" | "pending";
}

export interface UpdateParticipantRequest {
  state: "valid" | "pending" | "banned";
}

export interface GetTalksResponse {
  talks: Talk[];
  fullCount: number;
}

export interface CreateTalkRequest {
  title: string;
  state: "private" | "limited" | "public";
  eventId: string;
}

export interface UpdateTalkRequest {
  title: string;
  videoId: string;
  slideUrl: string;
  state: "private" | "limited" | "public";
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
