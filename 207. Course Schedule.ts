function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph = new Map<number, number[]>();
  const visited = new Array(numCourses).fill(0);

  for (const [a, b] of prerequisites) {
    if (!graph.has(a)) graph.set(a, []);
    graph.get(a).push(b);
  }

  const hasCycle = (course: number) => {
    if (visited[course] === 1) return true;
    if (visited[course] === 2) return false;

    visited[course] = 1;

    const neighboors = graph.get(course) || [];
    for (const neighboor of neighboors) {
      if (hasCycle(neighboor)) return true;
    }

    visited[course] = 2;

    return false;
  };

  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) return false;
  }

  return true;
}

// khan
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph = new Map<number, number[]>();
  const inDegree = new Array(numCourses).fill(0);

  for (const [course, prerequsite] of prerequisites) {
    if (!graph.has(prerequsite)) graph.set(prerequsite, []);
    graph.get(prerequsite).push(course);
    inDegree[course]++;
  }

  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  let cCourse = 0;
  while (queue.length) {
    const course = queue.shift();
    cCourse++;

    const neighboors = graph.get(course) || [];
    for (const neighboor of neighboors) {
      inDegree[neighboor]--;
      if (inDegree[neighboor] === 0) {
        queue.push(neighboor);
      }
    }
  }

  return cCourse === numCourses;
}
