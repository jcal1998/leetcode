class DListNode {
  key: number;
  val: number;
  next: DListNode | null;
  prev: DListNode | null;

  constructor(
    key?: number,
    val?: number,
    next?: DListNode | null,
    prev?: DListNode | null
  ) {
    this.key = key === undefined ? 0 : key;
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.prev = prev === undefined ? null : prev;
  }
}

class LRUCache {
  capacity: number;
  head: DListNode | null;
  tail: DListNode | null;
  cacheMap: Map<number, DListNode>;
  len: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.head = null;
    this.tail = this.head;
    this.cacheMap = new Map<number, DListNode>();
    this.len = 0;
  }

  get(key: number): number {
    const node = this.cacheMap.get(key);
    if (!node) return -1;

    this.moveToHead(node);
    return node.val;
  }

  put(key: number, value: number): void {
    if (this.cacheMap.has(key)) {
      const node = this.cacheMap.get(key);
      node.val = value;
      this.moveToHead(node);
    } else {
      const node = new DListNode(key, value);
      this.cacheMap.set(key, node);
      this.addToHead(node);
      this.len++;

      if (this.len > this.capacity) {
        this.removeTail();
        this.len--;
      }
    }
  }

  private moveToHead(node: DListNode): void {
    if (this.head === node) {
      return;
    }

    this.removeNode(node);
    this.addToHead(node);
  }

  private removeNode(node: DListNode): void {
    if (node.prev) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }
  }

  private addToHead(node: DListNode): void {
    node.next = this.head;
    node.prev = null;

    if (this.head) {
      this.head.prev = node;
    }

    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }
  }

  private removeTail(): void {
    if (!this.tail) return;

    this.cacheMap.delete(this.tail.key);
    this.removeNode(this.tail);
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
