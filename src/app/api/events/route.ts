import { NextResponse } from 'next/server';

type Event = {
  id: string;
  title: string;
  date: string;
  description: string;
};

const events: Event[] = []; // In-memory storage for events

export async function GET() {
  // Return all events
  return NextResponse.json(events);
}

export async function POST(request: Request) {
  // Create a new event
  const { title, date, description } = await request.json();
  const newEvent: Event = {
    id: String(events.length + 1),
    title,
    date,
    description,
  };
  events.push(newEvent);
  return NextResponse.json(newEvent, { status: 201 });
}
