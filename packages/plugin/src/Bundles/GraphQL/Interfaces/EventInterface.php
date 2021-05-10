<?php

namespace Solspace\Calendar\Bundles\GraphQL\Interfaces;

use craft\gql\types\DateTime;
use GraphQL\Type\Definition\Type;
use Solspace\Calendar\Bundles\GraphQL\Types\EventType;
use Solspace\Calendar\Bundles\GraphQL\Types\Generators\EventGenerator;

class EventInterface extends AbstractInterface
{
    public static function getName(): string
    {
        return 'CalendarEventInterface';
    }

    public static function getTypeClass(): string
    {
        return EventType::class;
    }

    public static function getGeneratorClass(): string
    {
        return EventGenerator::class;
    }

    public static function getDescription(): string
    {
        return 'Calendar Event GraphQL Interface';
    }

    public static function getFieldDefinitions(): array
    {
        return [
            'id' => [
                'name' => 'id',
                'type' => Type::int(),
                'description' => "The event's ID",
            ],
            'uid' => [
                'name' => 'uid',
                'type' => Type::string(),
                'description' => "The event's UUID",
            ],
            'postDate' => [
                'name' => 'postDate',
                'type' => Type::string(),
                'description' => "The event's Post Date",
            ],
            'calendarId' => [
                'name' => 'calendarId',
                'type' => Type::int(),
                'description' => "The event's Calendar ID",
            ],
            'calendar' => [
                'name' => 'calendar',
                'type' => CalendarInterface::getType(),
                'description' => "The event's Calendar",
            ],
            'name' => [
                'name' => 'name',
                'type' => Type::string(),
                'description' => "The event's name",
            ],
            'authorId' => [
                'name' => 'authorId',
                'type' => Type::int(),
                'description' => "The event's author ID",
            ],
            'startDate' => [
                'name' => 'startDate',
                'type' => DateTime::getType(),
                'description' => "The event's start date",
            ],
            'startDateLocalized' => [
                'name' => 'startDateLocalized',
                'type' => DateTime::getType(),
                'description' => "The event's start date localized",
            ],
            'initialStartDate' => [
                'name' => 'initialStartDate',
                'type' => DateTime::getType(),
                'description' => "The event's initial start date",
            ],
            'endDate' => [
                'name' => 'endDate',
                'type' => DateTime::getType(),
                'description' => "The event's start date",
            ],
            'endDateLocalized' => [
                'name' => 'endDateLocalized',
                'type' => DateTime::getType(),
                'description' => "The event's end date localized",
            ],
            'initialEndDate' => [
                'name' => 'initialEndDate',
                'type' => DateTime::getType(),
                'description' => "The event's initial end date",
            ],
            'allDay' => [
                'name' => 'allDay',
                'type' => Type::boolean(),
                'description' => 'Is event an all day event',
            ],
            'rrule' => [
                'name' => 'rrule',
                'type' => Type::string(),
                'description' => "The event's RRule",
            ],
            'freq' => [
                'name' => 'freq',
                'type' => Type::string(),
                'description' => 'Repeat frequency',
            ],
            'interval' => [
                'name' => 'interval',
                'type' => Type::int(),
                'description' => 'Repeat interval',
            ],
            'count' => [
                'name' => 'count',
                'type' => Type::int(),
                'description' => 'Repeat count',
            ],
            'until' => [
                'name' => 'until',
                'type' => DateTime::getType(),
                'description' => 'Repeat until date',
            ],
            'untilLocalized' => [
                'name' => 'untilLocalized',
                'type' => DateTime::getType(),
                'description' => 'Repeat until date localized',
            ],
            'byMonth' => [
                'name' => 'byMonth',
                'type' => Type::string(),
                'description' => 'Repeat by months',
            ],
            'byYearDay' => [
                'name' => 'byYearDay',
                'type' => Type::string(),
                'description' => 'Repeat by year days',
            ],
            'byMonthDay' => [
                'name' => 'byMonthDay',
                'type' => Type::string(),
                'description' => 'Repeat by month days',
            ],
            'byDay' => [
                'name' => 'byDay',
                'type' => Type::string(),
                'description' => 'Repeat by days',
            ],
        ];
    }
}