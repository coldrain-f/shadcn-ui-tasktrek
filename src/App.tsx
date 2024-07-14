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
} from "@/components/ui/card";
import { Icons } from "@/components/icons/icons";
import { SunIcon } from "@radix-ui/react-icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";

function App() {
  const { toast } = useToast();

  return (
    <>
      <div className="w-screen border h-12 shadow-sm bg-white sticky top-0">
        <div className="container mx-auto w-[800px] p-2">
          <div className="flex justify-between">
            <a
              href="#"
              className="text-xl tracking-tight text-slate-700 hover:text-slate-500 font-semibold font-family-inter"
            >
              Home
            </a>

            <div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  window.open("https://github.com/tasktrekTT");
                }}
              >
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
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-stone-700 mt-1">
            팀 소개
          </h3>
          <Separator className="my-4" />

          <p
            className="leading-7 text-stone-700"
            style={{ fontSize: "15px", lineHeight: "1.65rem" }}
          >
            <img
              src="https://cdn.pixabay.com/photo/2024/05/02/09/16/web-development-8734249_1280.png"
              className="w-48 h-36 float-left rounded-xl mr-4 object-cover"
            />
            안녕하세요! 저희는 다양한 프로젝트를 통해 CRUD, 검색 및 필터링, 웹
            소켓 등 다양한 기능을 REST API로 구현하여{" "}
            <span className="font-semibold">
              프로그래밍 실력을 한 단계 더 향상
            </span>
            시키고자 합니다.
            <div className="pt-4" />
            또한, 백엔드 단의 테스트 코드 와 클린 코드 작성을 통해{" "}
            <span className="font-semibold">
              가독성이 높고 신뢰할 수 있는 코드 작성을 목표
            </span>
            로 계속해서 학습하고 리팩터링 해나갈 생각입니다.
          </p>
        </div>

        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-stone-700 mt-14">
          프로젝트
        </h3>
        <p className="text-sm text-muted-foreground mt-1.5 mb-5">
          프로젝트의 Github 저장소로 이동할 수 있습니다.
        </p>
        <Separator className="my-4" />
        <Tabs defaultValue="coldrain-f">
          <TabsList>
            <TabsTrigger value="coldrain-f">coldrain-f</TabsTrigger>
            <TabsTrigger value="ksinny">ksinny</TabsTrigger>
          </TabsList>
          <TabsContent value="coldrain-f">
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <div className="flex flex-wrap gap-4">
                    <Card
                      className="w-[376px] hover:bg-stone-50 cursor-pointer shadow-md"
                      onClick={() => {
                        toast({
                          title: "coldrain-f > Tasktrek Todo's",
                          description:
                            "Github 저장소가 아직 생성되지 않았습니다.",
                          duration: 1000,
                        });
                      }}
                    >
                      <CardHeader>
                        <CardTitle className="text-stone-700">
                          Tasktrek Todo's
                        </CardTitle>
                        <CardDescription>
                          심플한 할 일 관리 서비스입니다. 데이터베이스와
                          연동하여 CRUD, 페이징, 검색 및 필터링 기능 등이
                          있습니다.
                        </CardDescription>
                      </CardHeader>

                      <CardContent>
                        <h3 className="scroll-m-20 text-base font-semibold tracking-tight text-slate-700 mb-2">
                          Skills
                        </h3>
                        <div className="flex h-5 items-center space-x-3 text-sm">
                          <div>Typescript</div>
                          <Separator orientation="vertical" />
                          <div>React</div>
                          <Separator orientation="vertical" />
                          <div>shadcn/ui</div>
                          <Separator orientation="vertical" />
                          <div>Java</div>
                        </div>

                        <div className="flex h-5 items-center space-x-3 text-sm mt-2">
                          <div>Spring</div>
                          <Separator orientation="vertical" />
                          <div>JPA</div>
                          <Separator orientation="vertical" />
                          <div>QueryDSL</div>
                          <Separator orientation="vertical" />
                          <div>MariaDB</div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card
                      className="w-[376px] hover:bg-stone-50 cursor-pointer shadow-md"
                      onClick={() => {
                        toast({
                          title: "coldrain-f > Tasktrek Chat",
                          description:
                            "Github 저장소가 아직 생성되지 않았습니다.",
                          duration: 1000,
                        });
                      }}
                    >
                      <CardHeader>
                        <CardTitle className="text-stone-700">
                          Tasktrek Chat
                        </CardTitle>
                        <CardDescription>
                          Socket을 활용한 채팅 서비스입니다. 최근 채팅 내역을
                          Redis로 캐싱하여 보여줍니다.
                        </CardDescription>
                      </CardHeader>

                      <CardContent>
                        <h3 className="scroll-m-20 text-base font-semibold tracking-tight text-slate-700 mb-2">
                          Skills
                        </h3>
                        <div className="flex h-5 items-center space-x-3 text-sm">
                          <div>Typescript</div>
                          <Separator orientation="vertical" />
                          <div>React</div>
                          <Separator orientation="vertical" />
                          <div>shadcn/ui</div>
                          <Separator orientation="vertical" />
                          <div>Java</div>
                        </div>
                        <div className="flex h-5 items-center space-x-3 text-sm mt-2">
                          <div>Spring</div>
                          <Separator orientation="vertical" />
                          <div>JPA</div>
                          <Separator orientation="vertical" />
                          <div>QueryDSL</div>
                          <Separator orientation="vertical" />
                          <div>MariaDB</div>
                          <Separator orientation="vertical" />
                          <div>Socket</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div className="flex flex-wrap gap-4">
                    <Card
                      className="w-[376px] hover:bg-stone-50 cursor-pointer shadow-md"
                      onClick={() => {
                        toast({
                          title: "coldrain-f > Tasktrek Calendar",
                          description:
                            "Github 저장소가 아직 생성되지 않았습니다.",
                          duration: 1000,
                        });
                      }}
                    >
                      <CardHeader>
                        <CardTitle className="text-stone-700">
                          Tasktrek Calendar
                        </CardTitle>
                        <CardDescription>coming soon...</CardDescription>
                      </CardHeader>

                      <CardContent>
                        <h3 className="scroll-m-20 text-base font-semibold tracking-tight text-slate-700 mb-2">
                          Skills
                        </h3>
                        <div className="flex h-5 items-center space-x-3 text-sm">
                          <div>Typescript</div>
                          <Separator orientation="vertical" />
                          <div>React</div>
                          <Separator orientation="vertical" />
                          <div>shadcn/ui</div>
                          <Separator orientation="vertical" />
                          <div>Java</div>
                        </div>
                        <div className="flex h-5 items-center space-x-3 text-sm mt-2">
                          <div>Spring</div>
                          <Separator orientation="vertical" />
                          <div>JPA</div>
                          <Separator orientation="vertical" />
                          <div>QueryDSL</div>
                          <Separator orientation="vertical" />
                          <div>MariaDB</div>
                          <Separator orientation="vertical" />
                          <div>Socket</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </TabsContent>
          <TabsContent value="ksinny">
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <div className="flex flex-wrap gap-4">
                    <Card
                      className="w-[376px] hover:bg-stone-50 cursor-pointer shadow-md"
                      onClick={() => {
                        toast({
                          title: "ksinny > Tasktrek Todo's",
                          description:
                            "Github 저장소가 아직 생성되지 않았습니다.",
                          duration: 1000,
                        });
                      }}
                    >
                      <CardHeader>
                        <CardTitle className="text-stone-700">
                          Tasktrek Todo's
                        </CardTitle>
                        <CardDescription>
                          심플한 할 일 관리 서비스입니다. 데이터베이스와
                          연동하여 CRUD, 페이징, 검색 및 필터링 기능 등이
                          있습니다.
                        </CardDescription>
                      </CardHeader>

                      <CardContent>
                        <h3 className="scroll-m-20 text-base font-semibold tracking-tight text-stone-700 mb-2">
                          Skills
                        </h3>

                        <div className="flex h-5 items-center space-x-3 text-sm">
                          <div>Typescript</div>
                          <Separator orientation="vertical" />
                          <div>React</div>
                          <Separator orientation="vertical" />
                          <div>shadcn/ui</div>
                          <Separator orientation="vertical" />
                          <div>Java</div>
                        </div>

                        <div className="flex h-5 items-center space-x-3 text-sm mt-2">
                          <div>Spring</div>
                          <Separator orientation="vertical" />
                          <div>JPA</div>
                          <Separator orientation="vertical" />
                          <div>QueryDSL</div>
                          <Separator orientation="vertical" />
                          <div>MariaDB</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </TabsContent>
        </Tabs>

        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-stone-700 mt-6">
          개발자
        </h3>
        <p className="text-sm text-muted-foreground mt-1.5 mb-5">
          프로젝트에 참여한 개발자의 Github 링크로 이동할 수 있습니다.
        </p>

        <Separator className="my-4" />
        <div className="flex gap-4">
          <div
            className="leading-7 w-1/2 p-5 border rounded-md hover:bg-stone-100 shadow-md cursor-pointer"
            onClick={() => {
              window.open("https://github.com/coldrain-f");
            }}
          >
            <p className="mb-3 font-semibold">coldrain-f</p>
            <div className="flex">
              <Avatar className="mr-2 mt-[1px]">
                <AvatarImage src="https://ui.shadcn.com/avatars/02.png" />
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
            className="leading-7 w-1/2 p-5 border rounded-md hover:bg-stone-100 shadow-md cursor-pointer"
            onClick={() => {
              window.open("https://github.com/Ksinny");
            }}
          >
            <div className="flex">
              <p className="mb-3 font-semibold">ksinny</p>
            </div>
            <div className="flex">
              <Avatar className="mr-2 mt-[1px]">
                <AvatarImage src="https://ui.shadcn.com/avatars/01.png" />
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
      <Toaster />
    </>
  );
}

export default App;
