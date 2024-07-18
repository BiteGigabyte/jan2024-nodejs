export class ApiError extends Error {
  constructor(
    public messsage: string,
    public status: number,
  ) {
    super(messsage);
    this.status = status;
  }
}
