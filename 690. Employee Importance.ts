function getImportance(employees: Employee[], id: number): number {
  const employeeMap = new Map<number, Employee>();
  for (const employee of employees) {
    employeeMap.set(employee.id, employee);
  }

  function dfs(empId: number): number {
    const employee = employeeMap.get(empId)!;
    let totalImportance = employee.importance;
    for (const subId of employee.subordinates) {
      totalImportance += dfs(subId);
    }
    return totalImportance;
  }

  return dfs(id);
}
function getImportance(employees: Employee[], id: number): number {
  const employeeMap = new Map<number, Employee>();
  for (const employee of employees) {
    employeeMap.set(employee.id, employee);
  }

  let totalImportance = 0;
  const queue: number[] = [id];

  while (queue.length > 0) {
    const currentId = queue.shift()!;
    const employee = employeeMap.get(currentId)!;
    totalImportance += employee.importance;
    for (const subId of employee.subordinates) {
      queue.push(subId);
    }
  }

  return totalImportance;
}
