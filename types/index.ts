export interface CurrentUser {
  userId: string;
  avatarUrl: string;
}

export interface Event {
  id: string;
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
  id: string;
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
  id: string;
  userId: string;
  userName: string;
  avatarUrl: string;
  state: "valid" | "pending" | "banned";
}

export interface Talk {
  id: string;
  title: string;
  userId: string;
  userName: string;
  avatarUrl: string;
}

export interface TalkDetail {
  id: string;
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
  id: string;
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
  id: string;
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
  id: string;
  order: string[];
}

export interface CreateUserRequest {
  name: string;
  avatarUrl: string;
  email: string;
}

export interface UpdateUserRequest {
  id: string;
  name: string;
  githubId: string;
  twitterId: string;
}
