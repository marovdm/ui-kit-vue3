import {createRouter, createWebHistory} from "vue-router";
import Index from '@/views/Index.vue'
import Button from "@/views/Button.vue";
import Typography from "@/views/Typography.vue";
import Checkbox from "@/views/Checkbox.vue";
import RadioButton from "@/views/RadioButton.vue";
import ProgressBar from "@/views/ProgressBar.vue";
import Input from "@/views/Input.vue";
import Tabs from "@/views/Tabs.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/button',
            name: 'Button',
            component: Button
        },
        {
            path: '/typography',
            name: 'Typography',
            component: Typography
        },
        {
            path: '/checkbox',
            name: 'Checkbox',
            component: Checkbox
        },
        {
            path: '/radiobutton',
            name: 'RadioButton',
            component: RadioButton
        },
        {
            path: '/progress',
            name: 'progress',
            component: ProgressBar
        },
        {
            path: '/input',
            name: 'Input',
            component: Input
        },
        {
            path: '/tabs',
            name: 'Tabs',
            component: Tabs
        }
    ]
})

export default router;