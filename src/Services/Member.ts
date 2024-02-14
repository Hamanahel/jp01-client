import { UUID } from "crypto";
import { Client } from "../lib/Client";

const v1_prefix = '/api/v1/member';

export default class Member extends Client {

	constructor(tenant_base_url: string, version_uuid: UUID, session_uuid: UUID) {
		super({ tenant_base_url, version_uuid, session_uuid });
	}

	getMe() {
		return this.get_request(v1_prefix + '/me');
	}
}
