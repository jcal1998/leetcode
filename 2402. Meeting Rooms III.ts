interface Room {
  bookings: number;
  endTime: number;
}

function mostBooked(n: number, meetings: number[][]): number {
  const jak: { bookings: number; endTime: number }[] = Array.from(
    { length: n },
    () => ({ bookings: 0, endTime: 0 })
  );
  meetings.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < meetings.length; i++) {
    const [start, end] = meetings[i];
    let booked = false;

    for (let j = 0; j < n; j++) {
      if (jak[j].endTime <= start) {
        jak[j].bookings++;
        jak[j].endTime = end;
        booked = true;
        break;
      }
    }

    if (!booked) {
      let jakA = jak.reduce((min, room, i) =>
        room.endTime < min.endTime ? room : min
      );
      jakA.bookings++;
      jakA.endTime += end - start;
    }
  }

  let maxRoom = jak.reduce((max, room, i) =>
    room.bookings > max.bookings ? room : max
  );
  return jak.indexOf(maxRoom);
}
