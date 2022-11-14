import Request from "@utils/axios.util";

class IBaseService {
  protected request;
  constructor() {
    this.request = Request;
  }
}
export { IBaseService };
