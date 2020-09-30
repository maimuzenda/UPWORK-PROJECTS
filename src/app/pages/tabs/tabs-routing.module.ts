import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    children: [
      {
        path: "chats",
        loadChildren: () =>
          import("./chats/chats.module").then((m) => m.ChatsPageModule),
      },
      {
        path: "users",
        loadChildren: () =>
          import("./users/users.module").then((m) => m.UsersPageModule),
      },
      {
        path: "account",
        loadChildren: () =>
          import("./account/account.module").then((m) => m.AccountPageModule),
      },
      {
        path: "panic-button",
        loadChildren: () =>
          import("./panic-button/panic-button.module").then(
            (m) => m.PanicButtonPageModule
          ),
      },
      {
        path: "camera",
        loadChildren: () =>
          import("./camera/camera.module").then((m) => m.CameraPageModule),
      },
    ],
  },
  {
    path: "**",
    redirectTo: "/tabs/panic-button",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
