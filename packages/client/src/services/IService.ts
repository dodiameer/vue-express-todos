export default interface IService<T extends { id?: any }> {
  GetOne(id: T["id"]): Promise<T>
  GetAll(): Promise<T[]>
  CreateNew(data: T): Promise<T>
  Update(id: T["id"], newData: T): Promise<T>
  Delete(id: T["id"]): Promise<void>
}