// in src/App.js
import React from "react";
import { Admin, Resource, Delete } from "admin-on-rest";
//import { authClient } from 'aor-feathers-client';
//import { WithPermission } from 'aor-permissions';

import GlossaryTermIcon from "material-ui/svg-icons/action/speaker-notes";
import ActionLogIcon from "material-ui/svg-icons/device/storage";
import PostIcon from "material-ui/svg-icons/action/book";
import UserIcon from "material-ui/svg-icons/social/group";
import PersonAddIcon from "material-ui/svg-icons/social/person-add";
import AccountIcon from "material-ui/svg-icons/action/account-box";

import feathersRestClient from "./feathersRestClient";
import feathersAuthClient from "./feathersAuthClient";
import feathersClient from "./feathersClient";

import { MemberList, MemberEdit, MemberCreate } from "./members";
import {
  CountyCommitteeList,
  CountyCommitteeEdit,
  CountyCommitteeCreate
} from "./county-committees";

import { CertifiedListList, CertifiedListEdit } from "./certified-lists";

import { PageList, PageEdit, PageCreate } from "./pages";
import { UserList, UserEdit } from "./users";
import {
  GlossaryTermList,
  GlossaryTermCreate,
  GlossaryTermEdit
} from "./glossary-term";
import { NewsLinkList, NewsLinkCreate, NewsLinkEdit } from "./news-links";
import { ActionLogList } from "./actionLog";
import { ProfileList, ProfileEdit } from "./profile";
import { InviteList, InviteCreate } from "./invites";

import Menu from "./Menu";

// import authClient from './authClient';

const authClientOptions = {
  storageKey: "feathers-jwt",
  authenticate: { strategy: "local" }
};

const App = () => (
  <Admin
    title="CC Admin"
    menu={Menu}
    authClient={feathersAuthClient(feathersClient, authClientOptions)}
    restClient={feathersRestClient(feathersClient)}
  >
    <Resource
      name="county-committee-member"
      options={{ label: "CC Members" }}
      list={MemberList}
      edit={MemberEdit}
      create={MemberCreate}
      remove={Delete}
    />

    <Resource
      name="county-committee"
      options={{ label: "County Committees" }}
      list={CountyCommitteeList}
      edit={CountyCommitteeEdit}
      create={CountyCommitteeCreate}
      remove={Delete}
    />

    <Resource
      name="profile"
      icon={AccountIcon}
      options={{ label: "My Profile" }}
      list={ProfileList}
      edit={ProfileEdit}
    />

    <Resource
      name="page"
      icon={PostIcon}
      list={PageList}
      edit={PageEdit}
      create={PageCreate}
      remove={Delete}
    />

    <Resource
      name="user"
      icon={UserIcon}
      list={UserList}
      edit={UserEdit}
      remove={Delete}
    />

    <Resource
      name="invite"
      icon={PersonAddIcon}
      list={InviteList}
      create={InviteCreate}
      remove={Delete}
    />

    <Resource
      name="glossary-term"
      options={{ label: "Glossary" }}
      icon={GlossaryTermIcon}
      list={GlossaryTermList}
      create={GlossaryTermCreate}
      edit={GlossaryTermEdit}
      remove={Delete}
    />

    <Resource
      name="action-log"
      options={{ label: "Action Log" }}
      icon={ActionLogIcon}
      list={ActionLogList}
    />

    <Resource
      name="news-link"
      options={{ label: "News" }}
      icon={ActionLogIcon}
      list={NewsLinkList}
      create={NewsLinkCreate}
      edit={NewsLinkEdit}
      remove={Delete}
    />

    <Resource
      name="certified-list"
      options={{ label: "Imports" }}
      icon={ActionLogIcon}
      list={CertifiedListList}
      edit={CertifiedListEdit}
    />
  </Admin>
);

feathersClient.on("created", message =>
  console.log("Created a message", message)
);

export default App;
