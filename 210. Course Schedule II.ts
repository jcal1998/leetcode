function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const graph = new Map<number, number[]>();
  const visited = new Array(numCourses).fill(0);
  const result = [];

  for (const [course, prerequisite] of prerequisites) {
    if (!graph.has(course)) graph.set(course, []);
    graph.get(course).push(prerequisite);
  }

  const hasCycle = (course: number) => {
    if (visited[course] === 1) return true;
    if (visited[course] === 2) return false;

    const neighboors = graph.get(course) || [];
    visited[course] = 1;
    for (const neighboor of neighboors) {
      if (hasCycle(neighboor)) return true;
    }
    visited[course] = 2;
    result.push(course);
    return false;
  };

  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) return [];
  }

  return result;
}

// khan
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const graph = new Map<number, number[]>();
  const inDegree = new Array(numCourses).fill(0);
  const result = [];

  for (const [course, prerequisite] of prerequisites) {
    if (!graph.has(prerequisite)) graph.set(prerequisite, []);
    graph.get(prerequisite).push(course);
    inDegree[course]++;
  }

  let queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  while (queue.length) {
    const course = queue.shift();
    result.push(course);

    const neighboors = graph.get(course) || [];
    for (let neighboor of neighboors) {
      inDegree[neighboor]--;
      if (inDegree[neighboor] === 0) {
        queue.push(neighboor);
      }
    }
  }

  return result.length === numCourses ? result : [];
}
