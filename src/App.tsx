import "@/index.css";
import "@/App.css";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Icons } from "@/components/icons/icons";
import {
  Mail,
  EyeIcon,
  LucideSquareArrowOutUpRight,
  Link2,
  ListCollapseIcon,
} from "lucide-react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";

function App() {
  return (
    <>
      <div className="w-screen border h-12 shadow-sm">
        <div className="container mx-auto w-[800px] p-2">
          <div className="flex justify-between">
            <div>
              <a
                href="#"
                className="scroll-m-20 text-xl font-semibold tracking-tight text-slate-700"
              >
                Home
              </a>
            </div>
            <div>
              <Button variant="ghost" size="sm">
                <Icons.gitHub className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <SunIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto w-[800px] p-4">
        <div>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-stone-700 mt-6">
            About me
          </h3>
          <Separator className="my-4" />

          <p className="leading-7 mt-6">
            <img
              src="https://cdn.pixabay.com/photo/2024/05/02/09/16/web-development-8734249_1280.png"
              className="w-48 h-32 float-left rounded-xl mr-5"
            />
            Hello I'm{" "}
            <a href="#" className="font-semibold underline text-stone-700">
              coldrain
            </a>{" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            eucondimentum ex. Quisque non augue tellus. Cras commodo elementum
            vulputate.
          </p>
        </div>

        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-stone-700 mt-20">
          Projects
        </h3>
        <p className="text-sm text-muted-foreground mt-1.5 mb-5">
          Tap the card to go to the deployed project's website.
        </p>
        <Separator className="my-4" />

        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="flex flex-wrap gap-4">
                <Card className="w-[376px] hover:bg-stone-50 cursor-pointer shadow-sm">
                  <CardHeader>
                    <CardTitle>Tasktrek Todo's</CardTitle>
                    <CardDescription>
                      A project for managing tasks efficiently.
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <h3 className="scroll-m-20 text-base font-semibold tracking-tight text-stone-700 mb-2">
                      Skills
                    </h3>
                    <div className="flex h-5 items-center space-x-4 text-sm">
                      <div>React</div>
                      <Separator orientation="vertical" />
                      <div>Typescript</div>
                      <Separator orientation="vertical" />
                      <div>shadcn/ui</div>
                    </div>
                    <div className="flex h-5 items-center space-x-4 text-sm mt-2">
                      <div>Spring Boot</div>
                      <Separator orientation="vertical" />
                      <div>Java</div>
                      <Separator orientation="vertical" />
                      <div>JPA</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="w-[376px] hover:bg-stone-50 cursor-pointer shadow-sm">
                  <CardHeader>
                    <CardTitle>Tasktrek Chat</CardTitle>
                    <CardDescription>
                      A server-side chat project utilizing web sockets.
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <h3 className="scroll-m-20 text-base font-semibold tracking-tight text-stone-700 mb-2">
                      Skills
                    </h3>
                    <div className="flex h-5 items-center space-x-4 text-sm">
                      <div>React</div>
                      <Separator orientation="vertical" />
                      <div>Typescript</div>
                      <Separator orientation="vertical" />
                      <div>shadcn/ui</div>
                    </div>
                    <div className="flex h-5 items-center space-x-4 text-sm mt-2">
                      <div>Spring Boot</div>
                      <Separator orientation="vertical" />
                      <div>Java</div>
                      <Separator orientation="vertical" />
                      <div>JPA</div>
                      <Separator orientation="vertical" />
                      <div>Web Socket</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="flex flex-wrap gap-4">
                <Card className="w-[376px] hover:bg-stone-50 cursor-pointer shadow-sm">
                  <CardHeader>
                    <CardTitle>Tasktrek Calendar</CardTitle>
                    <CardDescription>coming soon...</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <h3 className="scroll-m-20 text-base font-semibold tracking-tight text-stone-700 mb-2">
                      Skills
                    </h3>
                    <div className="flex h-5 items-center space-x-4 text-sm">
                      <div>React</div>
                      <Separator orientation="vertical" />
                      <div>Typescript</div>
                      <Separator orientation="vertical" />
                      <div>shadcn/ui</div>
                    </div>
                    <div className="flex h-5 items-center space-x-4 text-sm mt-2">
                      <div>Spring Boot</div>
                      <Separator orientation="vertical" />
                      <div>Java</div>
                      <Separator orientation="vertical" />
                      <div>JPA</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-stone-700 mt-14">
          Team
        </h3>
        <p className="text-sm text-muted-foreground mt-1.5 mb-5">
          Tap the card to go to the team member's Github.
        </p>

        <Separator className="my-4" />
        <div className="flex gap-4">
          <div
            className="leading-7 w-1/2 p-5 border rounded-md hover:bg-stone-100 shadow-sm cursor-pointer"
            onClick={() => {
              window.open("https://github.com/coldrain-f");
            }}
          >
            <p className="mb-3 font-semibold">coldrain-f</p>
            <div className="flex">
              <Avatar className="mr-2 mt-[1px]">
                <AvatarImage src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/9484def5-5edf-41b6-93dc-97a09580596e/width=1125/9484def5-5edf-41b6-93dc-97a09580596e.jpeg" />
                <AvatarFallback>SW</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm text-muted-foreground">
                  +82 10-2907-5569
                </p>
                <p className="text-sm text-muted-foreground">
                  sangwoonin@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div
            className="leading-7 w-1/2 p-5 border rounded-md hover:bg-stone-100 shadow-sm cursor-pointer"
            onClick={() => {
              window.open("https://github.com/Ksinny");
            }}
          >
            <div className="flex">
              <p className="mb-3 font-semibold">ksinny</p>
            </div>
            <div className="flex">
              <Avatar className="mr-2 mt-[1px]">
                <AvatarImage src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/15eec1aa-1584-45c5-8c2d-2f3b54e469cf/width=1125/15eec1aa-1584-45c5-8c2d-2f3b54e469cf.jpeg" />
                <AvatarFallback>KS</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm text-muted-foreground">
                  +82 10-0000-0000
                </p>
                <p className="text-sm text-muted-foreground">
                  ksinny@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
