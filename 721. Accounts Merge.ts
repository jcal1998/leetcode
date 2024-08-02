class UnionFind {
  parent: number[];
  rank: number[];

  constructor(size: number) {
    this.parent = Array(size)
      .fill(0)
      .map((_, index) => index);
    this.rank = Array(size).fill(0);
  }

  find(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x: number, y: number): void {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY;
      } else {
        this.parent[rootY] = rootX;
        this.rank[rootX]++;
      }
    }
  }
}

function accountsMerge(accounts: string[][]): string[][] {
  const emailToId: Map<string, number> = new Map();
  const emailToName: Map<string, string> = new Map();
  let id = 0;

  for (const account of accounts) {
    const name = account[0];
    for (let i = 1; i < account.length; i++) {
      const email = account[i];
      if (!emailToId.has(email)) {
        emailToId.set(email, id++);
        emailToName.set(email, name);
      }
    }
  }

  const uf = new UnionFind(id);

  for (const account of accounts) {
    const firstEmailId = emailToId.get(account[1])!;
    for (let i = 2; i < account.length; i++) {
      const emailId = emailToId.get(account[i])!;
      uf.union(firstEmailId, emailId);
    }
  }

  const rootToEmails: Map<number, string[]> = new Map();
  for (const [email, emailId] of emailToId.entries()) {
    const rootId = uf.find(emailId);
    if (!rootToEmails.has(rootId)) {
      rootToEmails.set(rootId, []);
    }
    rootToEmails.get(rootId)!.push(email);
  }

  const result: string[][] = [];
  for (const emails of rootToEmails.values()) {
    emails.sort();
    const name = emailToName.get(emails[0])!;
    result.push([name, ...emails]);
  }

  return result;
}

function accountsMerge(accounts: string[][]): string[][] {
  const emailGraph: Map<string, Set<string>> = new Map();
  const emailToName: Map<string, string> = new Map();

  // Construir o grafo de e-mails
  for (const account of accounts) {
    const name = account[0];
    const firstEmail = account[1];
    for (let i = 1; i < account.length; i++) {
      const email = account[i];
      if (!emailGraph.has(firstEmail)) {
        emailGraph.set(firstEmail, new Set());
      }
      if (!emailGraph.has(email)) {
        emailGraph.set(email, new Set());
      }
      emailGraph.get(firstEmail)!.add(email);
      emailGraph.get(email)!.add(firstEmail);
      emailToName.set(email, name);
    }
  }

  const visited: Set<string> = new Set();
  const result: string[][] = [];

  // Função para realizar a DFS
  const dfs = (email: string, component: string[]) => {
    component.push(email);
    visited.add(email);
    for (const neighbor of emailGraph.get(email)!) {
      if (!visited.has(neighbor)) {
        dfs(neighbor, component);
      }
    }
  };

  // Explorar os componentes conectados no grafo
  for (const email of emailGraph.keys()) {
    if (!visited.has(email)) {
      const component: string[] = [];
      dfs(email, component);
      component.sort();
      const name = emailToName.get(component[0])!;
      result.push([name, ...component]);
    }
  }

  return result;
}
